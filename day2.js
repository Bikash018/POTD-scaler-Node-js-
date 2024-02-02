const fs = require('fs');
const path = require('path')

function writeToFile(filepath,content) {
    fs.writeFile(filepath,content, (err) =>{
        if(err){
            console.error(`Error writing fle ${err}`);
        } else{
            console.log("content written into file");
        }
    })
}

const content = "hello from Bikash";
const filename = 'file.txt' ;
const filepath = path.join(__dirname, filename) ;
writeToFile(filepath,content);
