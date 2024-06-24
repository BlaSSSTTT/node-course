const name ="Andrew";
const userAge = 27;

const user = {
    name,
    age:userAge,
    location:"123"
}

console.log(user);

const product = {
    label:"1",
    price: 3,
    stock:201,
    salePrice:undefined
}

const {label:productLabel,stock,salePrice} = product;

console.log(productLabel);