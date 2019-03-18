//@ts-check
const fs = require('fs');
const chalk = require('chalk');

const readNote = (title) => {
   const notes = loadNotes();
   const foundNote = notes.find((note) => {
     return(note.title === title); 
   });
debugger   
  // console.log('richard' + foundNote);
   if (!foundNote) {
     console.log(chalk.red.inverse("No Note Found"))
   } else {
     console.log(chalk.green.inverse(foundNote.title));
     console.log(foundNote.body);
   }
};
  
const addNote = (title, body) => {
  const notes = loadNotes(); 
  const duplicateNote = notes.find((note) =>{
    return note.title === title;
});

if (!duplicateNote) {  //if no match
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.green('Your Notes'));
  notes.forEach((note) => {
    console.log(chalk.yellow.inverse(note.title));
  });

}

 module.exports = {
   addNote: addNote,
   removeNote: removeNote, 
   listNotes: listNotes,
   readNote: readNote
 }; 