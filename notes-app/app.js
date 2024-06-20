const yargs = require('yargs');

const notes = require('./notes.js');
const command = process.argv[2];


yargs.command({
    command:"add", 
    descride:"add new property",
    builder:{
        title:{
            description: 'Node title',
            demandOption:true,
            type:'string'
        },
        body:{
            description: 'Node body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command:"remove", 
    descride:"remove property",
    builder:{
        title:{
            description: 'Node title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:"list", 
    descride:"list of property",
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command:"read", 
    descride:"read property",
    builder:{
        title:{
            description: 'Node title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
//console.log(yargs.argv);

