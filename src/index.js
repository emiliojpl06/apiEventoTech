import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'
import cors from 'cors'

const app = express()
const port = 3000
//middleware
app.use(bodyParser.json())
app.use(cors({
    origin: '*'
  }))
app.use('/api',routes)

app.get('/', (req, res) => {
    //Muestra en el navegador el siguiente mensaje
    res.send('Hello Prueba de API.....!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`))