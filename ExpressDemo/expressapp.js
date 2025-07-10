const express = require('express');
const routes = require('./routes/routes');

const port = 8888;

const app = express();

app.use('/api/v1/back', routes);

// app.get('/', (req, res) => {
//   res.send('This is express home page');
// });

// app.get('/about', (req, res) => {
//   res.send('This is express About page');
// });

// app.get('/jsonapi', (req, res) => {
//   //[] --> array, {} --> json
//   let jsonobj = {
//     name: 'Krishna',
//     id: 'tekyks',
//   };
//   res.send(jsonobj);
// });

//server listening
app.listen(port, () => {
  console.log('Express Server is listening on Port : ' + port);
});
