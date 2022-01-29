let express = require("express")

let app = express()

app.get("/", (req,res)=>{
    res.send("EL SERVIDOR FUNCIONA")
})

app.listen(3000, ()=>{
    console.log("Servidor funcionando en el puerto 3000")
})