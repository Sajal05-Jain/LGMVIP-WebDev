const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port =  3000;
const Home = fs.readFileSync('./index.html')
const Product = fs.readFileSync('./product.html')
const About= fs.readFileSync('./about.html')
const Contact = fs.readFileSync('./contact.html')
const Account = fs.readFileSync('./account.html')



const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url ;

    res.statusCode = 200;
    res.setHeader('Const-type','text\html');

    if(url=='/'){
        res.end(Home);
    }
   else if(url=='/product'){
        res.end(Product);
    }
   else if(url=='/about'){
        res.end(About);
    }
   else if(url=='/contact'){
        res.end(Contact);
    }
   else if(url=='/account'){
        res.end(Account);
    }
    else {
        res.end('<h1>404 not found</h1>');
    }
});

server.listen(port,hostname, ()=>{
console.log(`Server running at http://${hostname}:${port}/`);
});