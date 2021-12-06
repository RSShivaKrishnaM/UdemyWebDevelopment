const fs = require('fs');
const folderName = process.argv[2] || 'Project';
//asynchronously creating folder
/*fs.mkdir('dogs', { recursive: true }, (err) => {
    console.log("IN CALLBACK LOG!!")
    if (err) throw err;
  });

console.log("AFTER CREATING FILE LOG!!")*/
//synchronously creating folder
//fs.mkdirSync('cats');  
// console.log(fs);


//creating folder using commandline arguments
fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`)
fs.writeFileSync(`${folderName}/app.js`)
fs.writeFileSync(`${folderName}/style.css`)

