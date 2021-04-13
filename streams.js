const fs = require('fs');

// Stream sends files in chunks
// Best example of this is streaming videos like youtube, netflix. It'll take much longer to load the whole file so it separates them into chunks and we can begin viewing once the first chunk is loaded.

// // === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

// === === === === === === === === === === === === ===  Read Stream === === === === === === === === === === === === ===
// Syntax for createReadStream
// fs.createReadStream(The file we want to read in string format, {object with encoding type for the stream to format into readable chunks(otherwise it'll come in bytes format)})
// Encoding type is optional but it's very useful

// Reading Stream
// const readStream = fs.createReadStream('./docs/blog3.txt', {
//   encoding: 'utf8',
// });

// How to unpack chunks from stream
// readStream.on('data', (chunk) => {
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
// });

// // === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

// === === === === === === === === === === === === ===  Write Stream === === === === === === === === === === === === === ===
// // Writing on the Stream
// const readStream = fs.createReadStream('./docs/blog3.txt', {
//   encoding: 'utf8',
// });
// const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//   console.log('---- NEW CHUNK ----');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// });
// // === === === === === === === === === === === === === === === === === === === === === === === === === === === === === ===

// === === === === === === === === === === === === === ===  Piping === === === === === === === === === === === === === === ===
// A Shorter way of doing this
const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf8',
});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.pipe(writeStream);
