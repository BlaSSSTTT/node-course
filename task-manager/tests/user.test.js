const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../src/app.js");
const User = require("../src/models/user.js");

const user1Id = new mongoose.Types.ObjectId();


const user1 = {
    _id:user1Id,
    name: "Mike",
    email:"mike@example.com",
    password:"1234567890",
    tokens:[{
        token: jwt.sign({_id:user1Id}, process.env.JWT_SECRET)
    }]
}

beforeEach(async()=>{
    await User.deleteMany();
    await new User(user1).save();
})


test("Should signup a new user",async()=>{
    await request(app).post("/users").send({
        name:"Vlad",
        email:"exapmle@example.com",
        password:"MyPass777"
    }).expect(201)
})

test("Should login existing user",async()=>{
    await request(app).post("/user/login").send({
        email:user1.email,
        password:user1.password
    }).expect(200);
})
test("Should fail login nonexisting user",async()=>{
    await request(app).post("/user/login").send({
        email:"123",
        password:"!23123123123123"
    }).expect(404);
})
test("Should get profile for user",async()=>{
    await request(app)
    .get("/user/me")
    .set("Authorization",`Bearer ${user1.tokens[0].token}`)
    .send()
    .expect(200);
})