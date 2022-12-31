const fs = require('fs');
const file = './file.txt';
const moment = require('moment');

//watches for an update on the specified file and executes the callback
fs.watchFile(file,{interval: 0}, (current, previous)=>{
    //prints the current updated time
    console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
    
    // current.mtime => displays the last modified time
    // JSON.stringify(current) => displays the metadata of the modified file for further changes
    // JSON.stringify(previous) => displays the metadata of the current file before modification

    return console.log(`${file} updated ${current.mtime} current ${JSON.stringify(current)}, 
    previous ${JSON.stringify(previous)}`)
});

/**
 * the listener function that is passed to the Watch API is slightly different from the watchFile arguments.
 * eventType = would flag as a rename or change based on your action
 * filename = the file that triggered an event
 */
// fs.watch(file, (eventType, filename)=>{
//     const time = moment().format("MMMM Do YYYY, h:mm:ss a");
//     return console.log(`${filename} updated ${time} event t ${eventType}`)
// })
