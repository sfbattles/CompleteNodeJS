//@ts-check
const fs = require('fs');

// const book = {
//     title: 'ego is the Enemy',
//     author: 'ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name);
data.name = 'Richard';
data.age = 48;
console.log(data);
fs.writeFileSync('1-json.json',JSON.stringify(data));