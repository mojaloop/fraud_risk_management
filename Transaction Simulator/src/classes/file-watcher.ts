import * as events from "events";
import * as util from "util";
import * as fs from "fs";

export class FileWatcher extends events.EventEmitter {
    watchDir: string;
    processedDir: string;

    constructor(watchDir: string, processedDir: string) {
        super();
        this.watchDir = watchDir;
        this.processedDir = processedDir;
    }

    /* Cycles through directory and process any file
    found emitting a process event for each one*/

    watch() {
        const watcher = this;
        fs.readdir(this.watchDir, function (err, files) {
            if (err) throw err;
            for (let index in files) {
                watcher.emit("process", files[index]);
            }
        });
    }

    /* Start the directory monitoring 
    leveraging Node's fs.watchFile */

    start() {
        var watcher = this;
        fs.watchFile(this.watchDir, function () {
            watcher.watch();
        });
    }
}
