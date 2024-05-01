const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("db is connected!")
})
.catch((error) =>{
    console.log("Error connecting to db ", error)
});