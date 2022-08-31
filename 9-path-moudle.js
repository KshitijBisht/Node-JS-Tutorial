const path = require('path')

console.log(`Path Separator for my os is ${path.sep}`)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(`Filepath is ${filePath}`)

const base = path.basename(filePath)
console.log(`Base is ${base}`)

const absolutePath = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(`Absolute path is ${absolutePath}`) 