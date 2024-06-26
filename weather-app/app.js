const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

if(process.argv[2]){
    geocode(process.argv[2],(error, {longitude, latitude, location}={})=>{
        if(error){        
            return console.log(error);;
        }
        forecast(longitude, latitude, (error, forcastData) => {
            if(error){            
            return console.log('Error', error);
            }  
            console.log(location)      
            console.log(forcastData)
        })
    })
}else{
    console.log("Please, provide location");
}


