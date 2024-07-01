const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //resolve([1,5,7]);
        reject("Error");
    },2000);
});

doWorkPromise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})