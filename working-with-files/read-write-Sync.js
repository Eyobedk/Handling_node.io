const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), "hello.txt");

//SYNCHRONOUS OPERATION
//read texts
const contents = fs.readFileSync(filePath, 'utf8')

////write new content from the previous texts
fs.writeFileSync(filePath,contents.toUpperCase());

//view updated content
const updatedContent = fs.readFileSync(filePath, 'utf8')
console.log('content updated',updatedContent);



//ASYNCHRONOUS OPERATION
const contents2 = fs.readFileSync(filePath, 'utf8');

//reads the contents with 1 ms interval and exits when done with unref()
setInterval(()=> process.stdout.write(contents2), 1).unref();

//process.stdout.write => pipes the inputs to console.log