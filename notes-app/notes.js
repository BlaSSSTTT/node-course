const fs = require("fs");
const chalk = require('chalk');
let getNotes = () => {
    return "Notes...";
}

const addNode = (title, body) => {
    const notes = loadNodes();
    const dublicatesNotes = notes.filter((note)=>title===note.title);
    if(dublicatesNotes.length===0){
        notes.push({title, body});    
        saveNotes(notes); 
        console.log(chalk.green("New note added!"))
    }else{
        console.error(chalk.red("Title taken"));
    }
    
}

const removeNode = (title) => {
    const notes = loadNodes();
    const newArrNotes = notes.filter((note)=>title!==note.title);
    if(newArrNotes.length!==notes.length){  
        saveNotes(newArrNotes); 
        console.log(chalk.green("The note removed!"))
    }else{
        console.error(chalk.red("No such note!"));
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
    getNotes,
    addNode,
    removeNode
};