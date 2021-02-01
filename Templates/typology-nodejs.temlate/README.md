# Typology Template for NodeJs

This project is meant to speed up the development of typologies for the nodejs stack.  
This project includes:

- Connection to sender and receiver redis servers
- Connection to the Kakfa server for both receiving transactions, publishing logs and response of the typology
- Setup of the basic scoring engine
- Example of rule execution and resolution of the scores of those rules

To get started:

1. Copy the template to the working directory where the typology is expected
2. Run the following command, replace the typology number with the number associated to the typology you are trying to create:  
   `npm run init:template <TYPOLOGY_NUMBER>` - Note: if you want to see usage of this command try:  
    `npm run init:template -- -h`
3. The above command will install all dependencies and then setup the typology project to a state that would enable development.

After the typology is done initializing the below can be used to run the develop environment.

- To debug, run: "npm run start:dev" - this will compile and run the .ts files, also start a file watcher to recompile as changes
    are made to any .ts files
- To do prod build, run: "npm build" - this will clear, then create, all .js files in the /build subfolder
- To run prod build, run: "npm run start"

Other handy commands - while debugging, if you want the app to reload, just type "rs" in the terminal, this will trigger a restart.
