//Importamos nuestros frameworks
import express from "express"
import cors from 'cors'

//Importamos la conexión a la DB
import db from "./database/db.js"

//Importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log('El error de conexión es: ${error}')
}

app.get('/', (req, res)=>{
    res.send('Hola Mundo')
})

app.listen(8000, ()=>{
    console.log('Server Up running in http://localhost:8000/')
})