import express from 'express'
import cors from 'cors'

import GenerateToken from './routes/GenerateToken'

const whitelist: Array<string> = []
const port = Number(process.env.PORT!)

const app = express()

app.use(express.json())
app.use(cors({
  origin: process.env.AMBIENT !== "production" ? "*" : (origin, callback) => {
    if (whitelist.indexOf(origin!) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  credentials: true
}))

app.use("/token", GenerateToken)

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});