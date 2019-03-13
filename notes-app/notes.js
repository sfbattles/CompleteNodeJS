//@ts-check
const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    return 'My Note';
  };
  

const addNote = (title, body) => {
  const notes = loadNotes(); 
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if ( duplicateNotes.length === 0 ) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
   
    console.log(chalk.green.inverse('new note added'));
  } else {
    console.log(chalk.red.inverse("note title taken"));
  }  
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = removeIndividualNote(notes,title);  
  if (notesToKeep.length === notes.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    console.log(chalk.green.inverse('Note was removed'));
    saveNotes(notesToKeep);
  }  
};

const removeIndividualNote = (notesArray,removeValue) => {
  return notesArray.filter((note) => {
    return note.title !== removeValue;
  }); 
} 

 module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote 
 }; 