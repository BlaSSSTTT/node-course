const add = (a,b)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },2000);
    })
}

// add(2,1).then((data)=>{
//     console.log(data);
//     add(data,5).then((data1)=>{
//         console.log(data1);
//     }).catch((error1)=>{
//         console.log(error1);
//     })
// }).catch((error)=>{
//     console.log(error);
// })


add(1,1).then((sum)=>{
    console.log(sum);
    return add(sum,1);
}).then((sum)=>{
    console.log(sum);
}).catch((error)=>{
    console.log(error);
})


