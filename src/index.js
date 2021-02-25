import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import { auth } from './controllers/auth.js'
import routes from './routes/api.js'
import './db.js'
//configure .env
dotenv.config()
//instace express
const app = express()
const port = process.env.PORT || 3000
//configure middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extends:true}))
app.use('/api',routes)
//configure routes
app.get("/",auth);
//open server
app.listen(port,()=>{
    console.log("RUNNING APP IN PORT: "+port)
})