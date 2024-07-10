const socket = io();

const $messageForm = document.getElementById("messageForm");
const $sendLocationButton = document.getElementById("send-location");
const $messageFormInput = $messageForm.querySelector("input");
const $messageFormButton = $messageForm.querySelector("button");
const $messages = document.getElementById("messages");

const messageTemplate = document.getElementById("message-template").innerHTML;
const locationTemplate = document.getElementById("location-template").innerHTML;

$messageForm.addEventListener("submit",(e)=>{
    e.preventDefault();


    $messageFormButton.setAttribute("disabled", "disabled");
    const message = e.target.elements.message.value;

    socket.emit("sendMessage",message,()=>{
        $messageFormButton.removeAttribute("disabled");
        $messageFormInput.value = "";
        $messageFormInput.focus();

        console.log("The message was delivered")
    });
})

$sendLocationButton.addEventListener("click",()=>{
    if(!navigator.geolocation){
        return alert("Geolocation is not supported by your browser");
    }
    $sendLocationButton.setAttribute("disabled","disabled")
    navigator.geolocation.getCurrentPosition((position)=>{
        socket.emit("sendLocation",{
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
        },()=>{
            $sendLocationButton.removeAttribute("disabled");
            console.log("Location was shared!");
        })
    })
})


socket.on("message",(message)=>{
    console.log(message);
    const html = Mustache.render(messageTemplate,{message});
    $messages.insertAdjacentHTML("beforeend",html);
})
socket.on("locationMessage",(location)=>{
    console.log(location);
    const html = Mustache.render(locationTemplate,{location});
    $messages.insertAdjacentHTML("beforeend",html);
})