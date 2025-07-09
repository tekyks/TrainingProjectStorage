const fs = require('node:fs');

// fs.readFile('file.txt', 'utf-8', (err, data) => {
//   console.log(data);
// });

//const content = fs.readFileSync('file.txt');
//console.log(content);
//console.log(content.toString());

// fs.writeFile('file2.txt', 'This is test 2 file', () => {
//   console.log('inside File write is successful!');
// });

fs.writeFileSync('file3.txt', 'This is test 3 file');

console.log('File write is successful!');
