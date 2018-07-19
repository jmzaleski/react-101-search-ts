// imports  giphy.GIFObject
import * as giphy from 'restyped-giphy-api';
import * as jest from 'jest';

// this file is meant to create a so-called jest "manual mock" 
// for the objects returned by the giphy API search endpoint

const M = jest.fn<giphy.GIFObject>( () => {
  aMockedFunction: jest.fn()
});

const m:giphy.GIFObject = M();

// let mockFiles = Object.create(null);

// function __setMockFiles(mockGIFObjects) {
//   mockFiles = Object.create(null);
//   for (const file in mockGIFObjects) {
//     // const dir = path.dirname(file);

//     if (!mockFiles[dir]) {
//       mockFiles[dir] = [];
//     }
//     mockFiles[dir].push(path.basename(file));
//   }
// }

// // A custom version of `readdirSync` that reads from the special mocked out
// // file list set via __setMockFiles
// function readdirSync(directoryPath) {
//   return mockFiles[directoryPath] || [];
// }

// fs.__setMockFiles = __setMockFiles;
// fs.readdirSync = readdirSync;

// module.exports = fs;
