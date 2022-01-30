let express = require("express")
let path = require("path")

let app = express()

//Para codificar Json así puede escribir y recibir Json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var mesas = []

var listaEspera = []

app.get("/", (req,res)=>{
    //res.send("EL SERVIDOR FUNCIONA") //No puedo poner esto, porque envía dos cosas a la vez
    res.sendFile(path.join(__dirname, "home.html")) //Con esto me redirige al archivo home.html 
    //el path.join junta la dirección de la carpeta, y lo que se pone a la derecha
    //console.log(__dirname) //esto regresa la dirección completa a la carpeta
})

app.get("/tables", (req,res)=>{
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/api/tables", (req,res)=>{
    return res.json(mesas)
})

app.get("/reserve", (req,res)=>{
    //res.json(mesas)
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.post("/api/reserve", (req,res)=>{
    let mesaNueva = req.body //Con esto recupero lo que se introduce
    //console.log(mesaNueva)
    if (mesas.length < 5 ){
        mesas.push(mesaNueva)
        res.send({title: "true"}) //Ocupo responder algo para que continúe con los procesos
    }
    else{
        listaEspera.push(mesaNueva)
        res.json(false)
    }
    //res.json(mesas) //Para que vuelva a publicar el api
})

app.get("/api/waitlist", (req,res)=>{
    res.json(listaEspera)
})

app.listen(3000, ()=>{
    console.log("Servidor funcionando en el puerto 3000")
})