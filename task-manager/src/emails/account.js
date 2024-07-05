const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMessage = (email,name)=>{
    sgMail.send({
        to:email,
        from:"task.manager.05072024@gmail.com",
        subject:"Thanks for joining in!",
        text:`Welcome to the app, ${name}. Let me know how you get along with app.`
    })
}
const sendCancelationMessage = (email,name)=>{
    sgMail.send({
        to:email,
        from:"task.manager.05072024@gmail.com",
        subject:"Sorry to see you go!",
        text:`Gootbye, ${name}. I hope to see you back sometime soon.`
    })
}



module.exports = {sendWelcomeMessage,sendCancelationMessage}
