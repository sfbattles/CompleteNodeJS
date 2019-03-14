const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a New Note',
    builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
       body: {
           describe: 'The Note Body',
           demandOption: true,
           type: 'string'
       }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body);
    }
});


yargs.command({
    command: 'remove',
    describe: 'Remove a New Note',
    builder: {
       title: {
           describe: 'Note title',
           demandOption: true,
           type: 'string'
       },
    },  
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    handler() {
        console.log('Read a Note');
    }
});

yargs.command({
    command: 'list',
    describe: 'list of Notes',
    handler() {
        console.log('list of Note');
    }
});

yargs.parse();

