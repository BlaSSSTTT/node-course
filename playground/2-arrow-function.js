// const square = function(x){
//     return x*x;
// }

// const square = (x)=>{
//     return x*x;
// }

// const square = (x)=> x*x;

// console.log(square(30));

const event ={
    name: "Birthday Party",
    guestList:["Andew", "Jen", "Mile"],
    printGuestList(){
        
        console.log('Guest list for '+this.name);
        this.guestList.forEach((name)=>{
            console.log(name+" is attending "+this.name);
        })
    }
}

event.printGuestList();