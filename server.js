const express =require("express");
const mongoose =  require("mongoose");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}))
app.use(express.json());


if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}

app.use(routes);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rportfolio").then(()=>{
    console.log("Succesfully connected to database.")
}).catch((err)=>{
    console.log("Uanble to connect to database.")
})

app.listen(PORT,function (){
    console.log(`Espress server is running on http://localhost:${PORT}`)
})