const { writeFileSync } = require('fs');
const http = require('http');
http.createServer((req,res)=>{
    writeFileSync("hello world");
}).listen(3000);