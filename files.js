const fs = require('fs');

// // === === === === === === === === === === === === ===  Reading files === === === === === === === === === === === === ===
// // Syntax
// // fs.readFile(location of the file in string format, a callbackFunction() that executes once it has finishes reading the file)
// // By Default it's an asynchronous operation
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   // console.log(data); // This will return in Buffer format. To read them, use .toString()
//   console.log(data.toString());
// });
// // console.log('last line'); // This line will run first since it's asynchronous
// // === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

// // === === === === === === === === === === === === ===  Writing files === === === === === === === === === === === === ===
// // Syntax
// // fs.writeFile(location of the file in string format, what we want to write into the file(this will override the whole file), a callback function that executes once it's done)
// fs.writeFile('./docs/blog1.txt', 'Replacing original text with this', () => {
//   console.log('file was written');
// });

// // If file location doesn't exists, it'll create a new one.
// fs.writeFile('./docs/blog2.txt', 'This is a second text file', () => {
//   console.log('text file was created');
// });
// // === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

// === === === === === === === === === === === === ===  Directories === === === === === === === === === === === === ===
// // Use .existsSync() to check if file exists
// // Syntax
// // fs.existsSync(name of file we're checking in string format)

// // Use .mkdir() to create directory
// // Syntax
// // fs.mkdir(where we want to create the directory in string format, a callback function that executes once it's done)
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('Folder created');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('deleted');
//   });
// }
// === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

// === === === === === === === === === === === === ===  DELETING FILES === === === === === === === === === === === === ===
// Checking to see if file exists
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
