const http = require("http");


const url ="http://api.weatherstack.com/current?access_key=1bdeda30d8966374e1b4a53f3ca56a98&query=45,-75";
const request = http.request(url,(response)=>{
    let data ="";
    response.on("data",(chunk)=>{
        data+=chunk;
    })

    response.on("end",() =>{
        const body = JSON.parse(data);
        console.log(body);
    })

});

request.on("error",(error)=>{
    console.log(error);
})
request.end();