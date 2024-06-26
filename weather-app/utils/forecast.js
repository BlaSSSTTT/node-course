
const request = require("request");

function forecast(long,lat,  callback){
    const url = "http://api.weatherstack.com/current?access_key=1bdeda30d8966374e1b4a53f3ca56a98&query="+encodeURIComponent(lat)+","+encodeURIComponent(long);

    request({url, json: true},(err,{body}={})=>{
        if(err){
            callback("Unable to connect to weather service!", undefined);
        }else if(body.error){
            callback("Unable to find location", undefined);           
        }else{
            const data = body.current;
            callback(undefined, data.weather_descriptions[0]+ ". It is currently "+ data.temperature + " degress out. It feels like "+data.feelslike+" degress out. The humiidity is "+ data.humidity+"%. The cloudcover is "+ data.cloudcover+"%.");
        }        
    })
}

module.exports = forecast;