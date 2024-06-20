const fs = require("fs");
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNodes();
    const dublicatesNote = notes.find((note)=>title===note.title);
    if(!dublicatesNote){
        notes.push({title, body});    
        saveNotes(notes); 
        console.log(chalk.green("New note added!"))
    }else{
        console.error(chalk.red("Title taken"));
    }
    
}

const removeNote = (title) => {
    const notes = loadNodes();
    const newArrNotes = notes.filter((note)=>title!==note.title);
    if(newArrNotes.length!==notes.length){  
        saveNotes(newArrNotes); 
        console.log(chalk.green("The note removed!"))
    }else{
        console.error(chalk.red("No such note!"));
    }
    
}
const listNotes = () => {
    const notes = loadNodes();
    console.log(chalk.blue("Your notes"));

    notes.forEach(element => console.log(chalk.green("Title: ")+ element.title+","+chalk.green(" body: ")+ element.body));    
}
const readNote = (title) => {
    const notes = loadNodes();
    const note = notes.find((note)=>title===note.title);
    if(note){
        console.log(chalk.blue("Title: "+note.title));
        console.log("Body: "+note.body);
    }else{
        console.error(chalk.red("No such note"));
    }
    
}
const loadNodes = () => {
    try{
        const dataJSON = fs.readFileSync("notes.json");
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }    
}
const saveNotes = (notes) =>{
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};