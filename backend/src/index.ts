import express, { Request, Response } from "express";
import cors from "cors"
import bodyParser from "body-parser";
import path from "path";
require("dotenv").config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'src/public')))

app.get("/", (req: Request, res: Response) => {
    res.send({
        msg: "Welcome to the digital phonebook!!"
    })
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`---- App is listening on port ${PORT}`)
})

