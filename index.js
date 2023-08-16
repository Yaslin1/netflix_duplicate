import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import { addMovie, getAllMovies } from "./movies.js"

dotenv.config() 
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4040

app.get("/", getAllMovies)

app.listen(PORT, ()=> {
  console.log(`API is listen on ${PORT}`)
})