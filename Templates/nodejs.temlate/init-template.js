/** "init:template": "npm i && node init-template.js"*/
var glob = require('glob');
var fs = require('fs');
var replace = require('replace');
var path = require('path');

var options = process.argv.slice(2);
var debugging = false;
var removeInitJs = true;
var projectName = '';

function initTemplate() {
  var cwd = process.cwd();

  // Validate that this template was copied out of Templates dir and the template is able to be renamed
  if (path.dirname(cwd).endsWith('\\Templates')) {
    throw 'Cannot init:template because the template has not been copied out of the templates directory, please do this so that the template itself is not updated';
  }

  if (options.length <= 0) {
    throw `Invalid arguments. 
Usage: 'npm run init:template <ProjectName>'. 
Or use 'npm run init:template -- -h' for alternative options.
Could not initialize the template because no typology number was not provided.`;
  }

  projectName = options[0];

  if (typeof projectName === 'string' && projectName.trim() === '-h') {
    showHelp();
  }

  if (!RegExp(/^\w.*\w$/gim).test(projectName)) {
    throw new Error(
      `Failed to initializing Template for project: '${projectName}'. The value passed is not a string`,
    );
  }

  projectName = `${projectName}`.replace(/\s\r/gim, () => '-');

  console.log(`Initializing template for: ${projectName}`);

  options.slice(1).forEach((opt) => {
    switch (opt) {
      case '-h':
        showHelp();
        break;
      case '-d':
        debugging = true;
        break;
      case '-k':
        removeInitJs = false;
        break;
    }
  });

  updateTypologyNameInCode();

  updatePackageJSON();

  createOpenFaasConfig();

  updateReadme();

  createEnvFile();

  cleanUp();

  updateGlobalLaunchSettings();

  console.log(`Done initialization ${projectName} ready for development.`);
}

function showHelp() {
  console.log(`
Usage: 'npm run init:template <Project_Name> -- <Debug_Options>'.

Debug_Options:
==============
-h          Displays help instructions
-k          Keep the init-template.js file and do not remove the file form the current dir, this should only be used for debugging
-d          Enables debug logging, to track all changes being made to the template`);
  process.exit();
}

function logDebug(msg) {
  if (debugging) {
    console.debug(msg);
  }
}

function updateTypologyNameInCode() {
  logDebug(
    '\nStarting replacement of project name in files in this project.\n',
  );

  const typologyNumberReplaceFlag = new RegExp(/\<\!ProjectName\!\>/, 'gmi');

  const fixedTypologyNumberFiles = [
    '.env.template',
    'docker-compose.yaml',
    'dockerfile',
    '.vscode/launch.json',
  ];

  // Go through specific files to replace the typology name
  logDebug(
    `Replacing ProjectName in fixed files :  \n${fixedTypologyNumberFiles.join(
      '\n',
    )}\n\nFiles Affected:`,
  );

  replace({
    regex: typologyNumberReplaceFlag,
    replacement: projectName,
    paths: fixedTypologyNumberFiles,
    recursive: true,
    silent: !debugging,
    async: false,
  });

  logDebug(
    `Replacement complete for fixed files (${fixedTypologyNumberFiles.length})\n`,
  );

  // Find typology number references in the code files
  try {
    var files = glob.sync('./src/**/*.ts');

    logDebug(
      `Found files for replacement of the ProjectName: \n${files.join(
        '\n',
      )}\n\nFiles Affected:`,
    );
    // Find and Replace Typology Number string
    replace({
      regex: typologyNumberReplaceFlag,
      replacement: projectName,
      paths: files,
      recursive: true,
      silent: !debugging,
    });

    logDebug(`Replace operation ran for files (${files.length})`);
  } catch (error) {
    throw `Failed to get all the code files (*.ts) in src directory to update typology\n${err}`;
  }
}

function updatePackageJSON() {
  logDebug('\nUpdating package.json properties');

  var userName = process.env['USERPROFILE'].split(path.sep)[2];

  logDebug(`Setting typology author to user: ${userName}`);

  var packageJSONString = fs.readFileSync('package.json', 'utf-8');
  var packageJSON = JSON.parse(packageJSONString);

  packageJSON['name'] = `${projectName}`;
  packageJSON[
    'description'
  ] = `${projectName[0].toUpperCase()}${projectName.substr(1)}`;
  packageJSON['author'] = userName;

  logDebug('Removing script "init:template" since it is no longer necessary');

  delete packageJSON['scripts']['init:template'];

  logDebug('Removing dev-dependency "replace" since it is no longer necessary');

  delete packageJSON['devDependencies']['replace'];

  fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 4));

  logDebug('Done updating package.json properties');

  logDebug('\nUpdating package-lock.json name property');

  var packageLckJSONString = fs.readFileSync('package-lock.json', 'utf-8');
  var packageLckJSON = JSON.parse(packageLckJSONString);

  packageLckJSON['name'] = `${projectName}`;

  fs.writeFileSync(
    'package-lock.json',
    JSON.stringify(packageLckJSON, null, 4),
  );

  logDebug('Done updating package-lock.json name property');
}

function createOpenFaasConfig() {
  let pName = projectName
    .replace(/([A-Z])/gm, (match, ...groups) => {
      return `-${groups[0].toLowerCase()}`;
    })
    .trim();
  if (pName.startsWith('-')) {
    pName = pName.substr(1);
  }
  const imageName = pName.replace(/-/gm, () => '_');
  const contents = `
version: 1.0
provider:
  name: openfaas
  gateway: http://127.0.0.1:8080
functions:
  off-frm-${pName}:
    lang: dockerfile
    handler: .
    image: localhost:5000/frm_${imageName}:latest
    annotations:
      com.openfaas.health.http.path: /online
      com.openfaas.health.http.initialDelay: "30s"
    secrets:
    - frmpullsecret`;
  fs.writeFileSync(`template.yml`, contents);
  fs.renameSync(`template.yml`, `${pName}.yml`);
}

function updateReadme() {
  var readMeContents = `# ${projectName}

This project defines the ${projectName}.  

To get started:

- To debug, run: "npm run start:dev" - this will compile and run the .ts files, also start a file watcher to recompile as changes
    are made to any .ts files
- To do prod build, run: "npm build" - this will clear, then create, all .js files in the /build subfolder
- To run prod build, run: "npm run start"

Other handy commands - while debugging, if you want the app to reload, just type "rs" in the terminal, this will trigger a restart.`;
  logDebug(
    '\nUpdating README.md to no longer have the template readme but rather a readme appropriate to a typology',
  );

  fs.writeFileSync('README.md', readMeContents);
}

function createEnvFile() {
  logDebug('\nCreating .env file from .env.template');
  fs.createReadStream('./.env.template').pipe(fs.createWriteStream('./.env'));
}

function cleanUp() {
  logDebug(
    '\nRemoving init-template.js because it is no longer needed for typology.\n',
  );

  if (removeInitJs) {
    fs.unlinkSync('./init-template.js');
  }

  // Attempt to rename current directory to "typology-###"
  // TODO: This needs to be fixed in the future
  // This does not work due to the current directory being in use

  // var sourceDirName = path.join(path.dirname(cwd), path.basename(cwd));
  // var destinationDirName = path.join(path.dirname(cwd), "test-typo");

  // try {
  //     fs.closeSync();
  //     fs.renameSync(sourceDirName, destinationDirName);
  // } catch (err) {
  //     throw `Unable to rename current typology template directory (${sourceDirName}) to (${destinationDirName})\n${err}`;
  // }

  // console.log(`Successfully renamed the template directory to the correct typology name: "${typologyName}".`);
}

function updateGlobalLaunchSettings() {
  try {
    const launchConfig = {
          type: 'node',
          request: 'launch',
          name: `Launch ${projectName}`,
          runtimeArgs: ['-r', 'ts-node/register'],
          args: [`${projectName}/src/index.ts`],
        };
    const taskConfig = {
      type: 'typescript',
      tsconfig: `${projectName}/tsconfig.json`,
      problemMatcher: ['$tsc'],
      group: 'build',
      label: `tsc:${projectName}`,
    };

    const globLaunchSettingsString = fs.readFileSync(
      '../.vscode/launch.json',
      'utf-8',
    );
    const globTasksSettingsString = fs.readFileSync(
      '../.vscode/tasks.json',
      'utf-8',
    );

    const globLaunchSettings = JSON.parse(globLaunchSettingsString);
    const globTasksSettings = JSON.parse(globTasksSettingsString);
    // Add the project to the launch settings and tasks
    globLaunchSettings.configurations.push(launchConfig);
    globTasksSettings.tasks.push(taskConfig);

    fs.writeFileSync(
      '../.vscode/launch.json',
      JSON.stringify(globLaunchSettings, null, 4),
    );
    fs.writeFileSync(
      '../.vscode/tasks.json',
      JSON.stringify(globTasksSettings, null, 4),
    );
  } catch (err) {
    console.error(
      `Failed to updated global launch.json and tasks.json, continuing due to non-lethal failure.\n${err}`,
    );
  }
}

initTemplate();
