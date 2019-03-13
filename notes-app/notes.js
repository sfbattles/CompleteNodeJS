//@ts-check
const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    return 'My Note';
  };
  

const addNote = function (title, body) {
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
   
    console.log("new note added");
  } else {
    console.log("note title taken");
  }  
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }
  catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = removeIndividualNote(notes,title);  
  if (notesToKeep.length === notes.length) {
    console.log(chalk.red.inverse('No note found!'));
  } else {
    console.log(chalk.green.inverse('Note was removed'));
    saveNotes(notesToKeep);
  }  
};

const removeIndividualNote = function (notesArray,removeValue) {
  return notesArray.filter((note) => {
    return note.title !== removeValue;
  }); 
} 

 module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote 
 }; 