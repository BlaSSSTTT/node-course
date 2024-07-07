const mongoose = require("mongoose");

const connectionURL = "mongodb+srv://antonchykvladyslav:hGo1p1txdbf8h4zu@chatdata.lt1qd1g.mongodb.net/?retryWrites=true&w=majority&appName=ChatData";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});