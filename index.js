const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')


const app = express()
const port = 8000
const mongoUrl = 'mongodb+srv://leocaselli:Domitila123.@cluster0.bvpuq.mongodb.net/api_broma?retryWrites=true&w=majority'

//conecta a la base datos 
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

// Refleja el error de conexion base de datos
mongoose.connection.on('error', err => {
    console.log('err on db connection', err)
})
// Despega mensaje conexion exitosa
mongoose.connection.on('connected', (err, res) => {
    console.log('mongoose is connected')
})



app.get("/", (req, res) => {
    res.json({ mensage: "hola mundo " });
});

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)       //ruta principal /api en la carpeta rout se le agregan rutas posteriores a esta /api/login 

app.listen(port, () => console.log(`listing a port: ${port}`));
