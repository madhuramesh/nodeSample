
const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const dataJSON = JSON.parse(data)

dataJSON.name = "Madhu"
dataJSON.age = 44



fs.writeFileSync('1-json.json',JSON.stringify(dataJSON))

/* Read from a file and convert to string then to JSON
const dataBuffer = fs.readFileSync('1-json.json')

console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
*/

/* convert json to string and write to a file
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan holiday'
}


const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)

*/

/* STRING TO JSON
console.log(bookJSON)

const parseData = JSON.parse(bookJSON)
console.log(parseData.author)
*/
