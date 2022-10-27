const express = require("express")
const path = require("path")
const app = express()

app.use(express.static("client/build"))
app.get("*", (req,res)=>{
    res.status(200).sendFile(path.join(__dirname + "/client/build/index.html" ))
})

app.listen(4000, ()=>{console.log("Server is listening on port 4000")})

