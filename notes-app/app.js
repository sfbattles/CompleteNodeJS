const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// const command = process.argv[2].toLowerCase();
//customize version for yargs
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
    handler: function (argv) {
        console.log(`Title: ${argv.title} \n Body: ${argv.body}`);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a New Note',
    handler: function () {
        console.log('remove a new Note');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a Note',
    handler: function () {
        console.log('Read a Note');
    }
});

yargs.command({
    command: 'list',
    describe: 'list of Notes',
    handler: function () {
        console.log('list of Note');
    }
});

yargs.parse();

