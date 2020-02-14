/**
 * Created by madhumathiramesh on 12/18/19.
 */
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
  command:'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      description: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },

  handler(argv){
    notes.addNotes(argv.title, argv.body)
    //console.log('Title: ', argv.title),
    //console.log('Body: ',argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler(argv){
    console.log('Removing the note', argv.title)
    notes.removeNotes(argv.title)

  }
})

yargs.command({
  command: 'list',
  describe: ' List of notes',
  handler(){
    console.log('Listing out all notes')
    notes.listNotes()
  }
})

yargs.command({
  command: 'read',
  describe: ' Read notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    console.log('Reading a note')
    notes.readNotes(argv.title)
  }
})

yargs.parse()


//To run remove notes

//-->node app.js remove --title="Title"

//To run add notes

//node app.js add --title="Title" --body="Bo"


//console.log(yargs.argv);

/* command line arguments
--> node app.js add
const command = process.argv[2]

console.log(process.argv);

if (command === 'add'){
  console.log('Adding note!!')
} else if (command === 'remove'){
  console.log('Removing note!!')
}
*/

/* to use library chalk, validator
const msg = getNotes()
console.log(msg);

const greenMsg = chalk.green.inverse.bold('Success!!');
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(greenMsg);
console.log(chalk.red('Error!'));
console.log(validator.isEmail('madhumathi.ramesh@gmail.com'))
*/





//const add = require('./utils.js')
//const sum = add(4, -2)
//console.log(sum);