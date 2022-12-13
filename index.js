const http = require('http');
const fs = require('fs')

fs.writeFile('index.html' , `<h1>Hello World</h1> \n<p>This is Saurabh Ahire</p>` , (err)=> {
    console.log(err);
})


const server = http.createServer((req,res)=> {
    res.writeHead(200 , {'content-type':'text/html'});
    fs.readFile('index.html', {encoding:'ascii'} , (err , data)=> {
        res.write(data);
        res.end();
    })
})

server.listen(5000 , ()=> console.log('server is up at port 5000'))