const fs = require('fs').promises;
//https://github.com/jugaz?tab=repositories.xml
fs.readFile('./REAME.md.tpl',{encoding:'utf-8'})
    .then(res => {
        console.log(res)
    })