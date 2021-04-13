const { people, age } = require('./people');
const os = require('os');
console.log(people, age);

console.log(os.platform(), os.homedir());
