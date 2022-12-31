
//listens to inputs and display them by applying a single change
process.stdin.on('data', (data)=>{

    //listening for process.stdin data events
    const name = data.toString().trim().toUpperCase();
    
    process.stdout.write(`hello ${name}`)
});
