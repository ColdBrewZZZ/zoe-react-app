const http = require("node:http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    fs.readFile('notesForm.html', 'utf8', (err, htmlContent) => {
        if (err) {
            console.error(err);
            res.writeHead(500);
            res.end('Internal Server Error');
            return;
        }

        res.end(htmlContent);
    });
});

server.listen(3001, () => {
    console.log('server is running :) ctrl C to stop');
});

// contact us html name,email,notes
// then thank you page, show name,email,notes 
// use real form
// express ejs template engine
// express js 
// 25/33 

// sql 2
