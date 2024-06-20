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
        notes.addNode(argv.title,argv.body);
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
        notes.removeNode(argv.title);
    }
})

yargs.command({
    command:"list", 
    descride:"list of property",
    handler(){
        console.log("Propertyes");
    }
})

yargs.command({
    command:"read", 
    descride:"read property",
    handler(){
        console.log("Read property");
    }
})

yargs.parse();
//console.log(yargs.argv);

