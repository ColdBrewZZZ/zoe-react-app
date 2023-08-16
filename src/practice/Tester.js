const fs = require('fs');
const path = require('path');

function listFoldersAndFiles(directoryPath, depth = 0) {
  // Read the files in the directory
  const files = fs.readdirSync(directoryPath);

  // Separate folders and files
  const subFolders = files.filter((file) => fs.statSync(path.join(directoryPath, file)).isDirectory());
  const subFiles = files.filter((file) => !subFolders.includes(file));

  // Log the folder's name (if not the root folder)
  if (depth > 0) {
    console.group(path.basename(directoryPath) + ' (Folder)');
  }

  // Log files directly under the folder
  subFiles.forEach((file) => console.log(file));

  // Recursively list subfolders and their contents
  subFolders.forEach((folder) => listFoldersAndFiles(path.join(directoryPath, folder), depth + 1));

  // Close the console.group() (if not the root folder)
  if (depth > 0) {
    console.groupEnd();
  }
}

const directoryPath = './alors-app/src/components/pages/Shopping'; // Replace with the path to your desired folder
listFoldersAndFiles(directoryPath);
