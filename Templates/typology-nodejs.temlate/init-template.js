/** "init:template": "npm i && node init-template.js"*/
var glob = require("glob");
var fs = require("fs");
var replace = require("replace");
var path = require("path");

var options = process.argv.slice(2);
var debugging = false;
var removeInitJs = true;
var typologyNumber = undefined;
var typologyName = undefined;

function initTemplate() {
    var cwd = process.cwd();

    // Validate that this template was copied out of Templates dir and the template is able to be renamed
    if (path.dirname(cwd).endsWith("\\Templates")) {
        throw "Cannot init:template because the template has not been copied out of the templates directory, please do this so that the template itself is not updated";
    }

    if (options.length <= 0) {
        throw `Invalid arguments. 
Usage: 'npm run init:template <Typology_Number>'. 
Or use 'npm run init:template -- -h' for alternative options.
Could not initialize the template because no typology number was not provided.`;
    }

    typologyNumber = options[0];

    if (typeof typologyNumber === "string" && typologyNumber.trim() === "-h") {
        showHelp();
    }

    if (!RegExp(/^\d*$/gim).test(typologyNumber)) {
        throw new Error(
            `Failed to initializing Template for typology: '${typologyNumber}'. The value passed is not a number`
        );
    }

    typologyName = `typology-${typologyNumber}`;

    console.log(`Initializing template for: ${typologyName}`);

    options.slice(1).forEach((opt) => {
        switch (opt) {
            case "-h":
                showHelp();
                break;
            case "-d":
                debugging = true;
                break;
            case "-k":
                removeInitJs = false;
                break;
        }
    });

    updateTypologyNameInCode();

    updatePackageJSON();

    updateReadme();

    createEnvFile();

    cleanUp();

    console.log(`Done initialization ${typologyName} ready for development.`);
}

function showHelp() {
    console.log(`
Usage: 'npm run init:template <Typology_Number> -- <Debug_Options>'.

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
        "\nStarting replacement of typology number in files in this project.\n"
    );

    const typologyNumberReplaceFlag = new RegExp(
        /\<\!TypologyNumber\!\>/,
        "gmi"
    );

    const fixedTypologyNumberFiles = [
        ".env.template",
        "docker-compose.yaml",
        "dockerfile",
    ];

    // Go through specific files to replace the typology name
    logDebug(
        `Replacing TypologyNumber in fixed files :  \n${fixedTypologyNumberFiles.join(
            "\n"
        )}\n\nFiles Affected:`
    );

    replace({
        regex: typologyNumberReplaceFlag,
        replacement: typologyNumber,
        paths: fixedTypologyNumberFiles,
        recursive: true,
        silent: !debugging,
        async: false,
    });

    logDebug(
        `Replacement complete for fixed files (${fixedTypologyNumberFiles.length})\n`
    );

    // Find typology number references in the code files
    try {
        var files = glob.sync("./src/**/*.ts");

        logDebug(
            `Found files for replacement of the TypologyNumber: \n${files.join(
                "\n"
            )}\n\nFiles Affected:`
        );
        // Find and Replace Typology Number string
        replace({
            regex: typologyNumberReplaceFlag,
            replacement: typologyNumber,
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
    logDebug("\nUpdating package.json properties");

    var userName = process.env["USERPROFILE"].split(path.sep)[2];

    logDebug(`Setting typology author to user: ${userName}`);

    var packageJSONString = fs.readFileSync("package.json", "utf-8");
    var packageJSON = JSON.parse(packageJSONString);

    packageJSON["name"] = `${typologyName}-engine`;
    packageJSON[
        "description"
    ] = `${typologyName[0].toUpperCase()}${typologyName.substr(
        1
    )} is a collection of FRM rules.`;
    packageJSON["author"] = userName;

    logDebug('Removing script "init:template" since it is no longer necessary');

    delete packageJSON["scripts"]["init:template"];

    logDebug(
        'Removing dev-dependency "replace" since it is no longer necessary'
    );

    delete packageJSON["devDependencies"]["replace"];

    fs.writeFileSync("package.json", JSON.stringify(packageJSON, null, 4));

    logDebug("Done updating package.json properties");

    logDebug("\nUpdating package-lock.json name property");

    var packageLckJSONString = fs.readFileSync("package-lock.json", "utf-8");
    var packageLckJSON = JSON.parse(packageLckJSONString);

    packageLckJSON["name"] = `${typologyName}-engine`;

    fs.writeFileSync(
        "package-lock.json",
        JSON.stringify(packageLckJSON, null, 4)
    );

    logDebug("Done updating package-lock.json name property");
}

function updateReadme() {
    var readMeContents = `# Typology ${typologyNumber} Engine

This project defines the rules and scoring of ${typologyName}-engine.  

To get started:

- To debug, run: "npm run start:dev" - this will compile and run the .ts files, also start a file watcher to recompile as changes
    are made to any .ts files
- To do prod build, run: "npm build" - this will clear, then create, all .js files in the /build subfolder
- To run prod build, run: "npm run start"

Other handy commands - while debugging, if you want the app to reload, just type "rs" in the terminal, this will trigger a restart.`;
    logDebug(
        "\nUpdating README.md to no longer have the template readme but rather a readme appropriate to a typology"
    );

    fs.writeFileSync("README.md", readMeContents);
}

function createEnvFile() {
    logDebug('\nCreating .env file from .env.template')
    fs.createReadStream("./.env.template").pipe(fs.createWriteStream("./.env"));
}

function cleanUp() {
    logDebug('\nRemoving init-template.js because it is no longer needed for typology.\n')
    
    if (removeInitJs) {
        fs.unlinkSync("./init-template.js");
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

initTemplate();
