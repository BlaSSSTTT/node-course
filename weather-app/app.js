//http://api.weatherstack.com/current?access_key=1bdeda30d8966374e1b4a53f3ca56a98&query=Netishyn



const request = require("request");

const url = "http://api.weatherstack.com/current?access_key=1bdeda30d8966374e1b4a53f3ca56a98&query=Netishyn";

request({url, json: true},(err,response)=>{
    const data = response.body.current;
    //console.log(data);
    console.log(data.weather_descriptions[0]+ ". It is currently "+ data.temperature + " degress out. It  feels like "+data.feelslike+" degress out");
})
const url2 = "https://api.mapbox.com/search/geocode/v6/forward?q=Netishyn&access_token=pk.eyJ1IjoiYmxhc3NzdHR0IiwiYSI6ImNseHAwd2lubjA3ZmEya3FzZ3JtNmZtc3kifQ.EAJiunSK01kl1Jc9pM0eVA&limit=1";

request({url:url2, json: true},(err,response)=>{
    const data = response.body.features[0].properties.coordinates;
    console.log(data);
    //console.log(err);
})