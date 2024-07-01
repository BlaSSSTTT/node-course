const {MongoClient, ObjectId }= require("mongodb-legacy");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, {useNewUrlParser: true},(error, client)=>{
    if(error){
        return console.log("Unable to connect to database!");
    }
    
    const db = client.db(databaseName);

    db.collection("tasks").deleteOne({
        description:"First task"
    }).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
});


