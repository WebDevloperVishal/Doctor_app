import express from 'express'
import dotenv from 'dotenv'
import morgan from "morgan";

import testRouters from "./routes/testRoutes.js"
dotenv.config();

const app = express()

const PORT = process.env.PORT || 5000


app.use('/api/v1/test', testRouters)

app.use(express.json())
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello World'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(PORT, () => console.log(`Server is running ${process.env.NODE_ENV} Port ${PORT}`))