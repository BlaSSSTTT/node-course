const fs = require('fs');



const dataJSON = fs.readFileSync("1-json.json").toString();

const data = JSON.parse(dataJSON);

data.name = "Vlad";
data.age = 19;

const changedJSON = JSON.stringify(data);

fs.writeFileSync("1-json.json", changedJSON);
