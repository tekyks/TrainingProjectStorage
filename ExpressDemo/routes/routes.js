const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is express home page');
});

router.get('/about', (req, res) => {
  res.send('This is express About page');
});

router.get('/jsonapi', (req, res) => {
  //[] --> array, {} --> json
  let jsonobj = {
    name: 'Krishna',
    id: 'tekyks',
  };
  res.send(jsonobj);
});

module.exports = router;
