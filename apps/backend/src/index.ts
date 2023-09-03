import express, { Request, Response } from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import path from 'path';
require('dotenv').config()
import { dataSource } from './dataSource'
import authRoutes from "./routes/auth.routes"
import studentRoutes from "./routes/student.routes";


dataSource
    .initialize()
    .then(() => {
        console.log("[+] Data Source initialized.")
    }).catch((error) => {
        console.error("Error during Data Source initialization:\n", error)
    })


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'src/public')))

app.use(authRoutes)
app.use(studentRoutes)

app.get("/", (req: Request, res: Response) => {
    res.send({
        msg: "Welcome to the digital phonebook!!"
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`---- App is listening on port ${PORT}`)
})

