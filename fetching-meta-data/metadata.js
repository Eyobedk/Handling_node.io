const fs = require('fs');
const path = require('path');


function metadataReader(file){
    //display data of the file using the statSync method
    const meta  =fs.statSync(file);
    console.log(meta.size)
}

//recive file path from terminal
const file = process.argv[2];

metadataReader(file);

