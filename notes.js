const fs = require('fs');
const chalk = require('chalk');

// Exported functions

const addNote = (title, body) => {
  const notes = loadNotes();

  for (const note of notes) {
    if (note.title === title) {
      return console.log(chalk.white.bold.bgRed('Note title already taken'));
    }
  }

  notes.push({
    title: title,
    body: body
  });

  saveNotes(notes);
  console.log(chalk.white.bold.bgGreen('Note added'));
}

const removeNote = (title) => {
  const notes = loadNotes();

  const newNotes = notes.filter((note) => note.title !== title);

  if (notes.length === newNotes.length) return console.log(chalk.white.bold.bgRed('No note found'));

  console.log(chalk.white.bold.bgGreen('Note removed'));
  saveNotes(newNotes);
}

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.underline('Your Notes'));
  for (const note of notes) {
    console.log(note.title);
  }
}

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title)

  if (note) {
    return console.log(chalk.yellow.underline(note.title) 
      + '\n' 
      + note.body
    );
  }

  console.log(chalk.white.bold.bgRed('Note not found'));
}

// Non-exported functions

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json'));
  } catch(e) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};