const { spawnSync } = require('child_process');
const { join, basename, } = require('path')
const { existsSync, mkdirSync, rmdirSync, readdirSync, statSync, writeFileSync } = require('fs')
const chalk = require('chalk')

const encoder = new TextEncoder();

var path = process.platform === 'win32' ? '.cmd' : '';

const PROTO_DIR = join(process.cwd(), "./proto");
const PROTO_OUT_DIR = join(process.cwd(), "./src/grpc")
const PROTOC_GEN_TS_PATH = join(process.cwd(), `./node_modules/.bin/protoc-gen-ts${path}`)
const GRPC_TOOLS_NODE_PROTOC_PLUGIN = join(process.cwd(), `./node_modules/.bin/grpc_tools_node_protoc_plugin${path}`)
const GRPC_TOOLS_NODE_PROTOC = join(process.cwd(), `./node_modules/.bin/grpc_tools_node_protoc${path}`);

function log(title, message) {
    const tool = chalk.bgBlueBright(chalk.black('Generator'));
    const messageTitle = chalk.bgGreenBright(chalk.black(title));
    console.log(`${tool} ${messageTitle} : ${message}`)
}

log('Startup', 'Starting...')

console.table({
    PROTO_DIR,
    PROTO_OUT_DIR,
    PROTOC_GEN_TS_PATH,
    GRPC_TOOLS_NODE_PROTOC_PLUGIN,
    GRPC_TOOLS_NODE_PROTOC
});

if (existsSync(PROTO_OUT_DIR)) rmdirSync(PROTO_OUT_DIR, { recursive: true });

function generateClient(protoFileName) {
    log('Generate Client', `${protoFileName}`)
    const protoFolderName = basename(protoFileName, '.proto');
    const protoOut = join(PROTO_OUT_DIR, protoFolderName);

    if (!existsSync(protoOut)) mkdirSync(protoOut, { recursive: true })

    const child = spawnSync(GRPC_TOOLS_NODE_PROTOC, [
        `--js_out=import_style=commonjs,binary:"${protoOut}"`,
        `--ts_out="${protoOut}"`,
        `--grpc_out="${protoOut}"`,
        `-I "${PROTO_DIR}"`,
        protoFileName
    ], {
        stdio: ['inherit', 'inherit', 'inherit'],
        shell: true
    })


    if (child.error) log('Generate Client Error', child.error.message)
    if (child.output) log('Generate Client Messages', child.output.filter(oo => !!oo).join('\n'))

    const indexData = `export * from './${protoFolderName}_pb'\nexport * from './${protoFolderName}_grpc_pb'`;

    log('Generate Client', `${protoFileName}/index.ts`)

    writeFileSync(join(protoOut, 'index.ts'), encoder.encode(indexData));

    for (const entry of readdirSync(protoOut)) {
        log('Generated', entry)
    }

    log('Generated Client', `${protoFileName}`);
}

log('Startup', `Loading proto files`)

for (const entry of readdirSync(PROTO_DIR)) {
    const entryPath = join(PROTO_DIR, entry);
    const stats = statSync(entryPath);

    if (stats.isDirectory()) continue;

    generateClient(entry);
}