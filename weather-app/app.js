const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

if(process.argv[2]){
    geocode(process.argv[2],(error, data)=>{
        if(error){        
            return console.log(error);;
        }
        forecast(data.longitude, data.latitude, (error, forcastData) => {
            if(error){            
            return console.log('Error', error);
            }  
            console.log(data.location)      
            console.log(forcastData)
        })
    })
}else{
    console.log("Please, provide location");
}


