const fs = require('fs');
const path = require('path')

function readFileContent(filepath) {
    fs.readFile(filepath,'utf-8',(err,data)=>{
        if(err){
            console.error(`error reading file ${err.message}`);
        } else{
            console.log(`File data : ${data}`);
        }
    })
}

const filename = 'file.txt' ;
const filepath = path.join(__dirname,filename);
readFileContent(filepath);