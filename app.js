const { readFileSync, writeFileSync } = require('fs')

const firstFileContent = readFileSync('./content/first.txt', 'utf8')
const secondFileContent = readFileSync('./content/second.txt', 'utf8')

console.log(firstFileContent,secondFileContent)

// creates new file result-sync.txt if not already present inside the content folder and write the values to that file
//flag a appends the text
writeFileSync('./content/result-sync.txt',`Here is the result ${firstFileContent}, ${secondFileContent}`,{flag: 'a'})