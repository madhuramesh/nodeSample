/**
 * Created by madhumathiramesh on 12/19/19.
 */

const fs = require('fs')
const chalk = require('chalk');

const getNotes= ()=>{
  return "your notes.."

}

const addNotes = (title, body) => {
  const notes = loadNotes()

  const duplicateNotes = notes.find((note) => note.title === title)
  //const duplicateNotes = notes.filter((note) => note.title === title)



  if (!duplicateNotes) {
      notes.push({
        title: title,
        body: body
      })

      saveNotes(notes)
      console.log(chalk.green.inverse('New note added!!'))
  } else {
      console.log(chalk.red.inverse('Note title taken!!'))
  }

}

const removeNotes = (title)=>{
  const notes = loadNotes()

  const notesToKeep = notes.filter((note) => note.title !== title)

  if (notes.length > notesToKeep.length){
      console.log(chalk.green.inverse('Notes removed!'));
      saveNotes(notesToKeep)
    }
  else
      console.log(chalk.red.inverse('No note found!'));
}

const readNotes = (title)=>{
  const notes = loadNotes()
  const noteFound = notes.find((note)=> note.title === title)

  if (noteFound)
    console.log(chalk.green.inverse(noteFound.title+" "+noteFound.body))
  else
    console.log(chalk.red.inverse('No note found!'));
}

const listNotes =()=>{
  const notes = loadNotes()

  notes.forEach((note)=>{
    console.log(chalk.green.inverse(note.title))
  })
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    //console.log(JSON.parse(dataJSON))
    return JSON.parse(dataJSON)
  } catch(e) {
      return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
}