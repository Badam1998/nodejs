const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.write('welcome to my home page');
    }

    if(req.url == '/about'){
        res.write('this is my short history');
    }
   else
    res.write(
        `
        <h1>Oops the page cant be found</h1>
        <p> you can go back to the home page
        </p>
        <a href ='/'>home page </a>
        `
    );
})


server.listen(5000);