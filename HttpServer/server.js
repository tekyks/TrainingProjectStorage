const http = require('http');

const port = 7777;

//create a server
const server = http.createServer((req, res) => {
  //res.statusCode = 200;
  //console.log(req.url);
  res.setHeader('Content-type', 'text/html');

  if (req.url == '/') {
    res.statusCode = 200;
    res.end('<H1>This is Home Page</H1>');
  } else if (req.url == '/about') {
    res.statusCode = 200;
    res.end('<H2>This is About Page</H2>');
  } else {
    res.statusCode = 404;
    res.end('<H3>Page Not Found</H3>');
  }
});

//server listening
server.listen(port, () => {
  console.log('Server is listening on Port : ' + port);
});
