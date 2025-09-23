import express from 'express'
import dotenv from 'dotenv'
import testRouters from "./routes/testRoutes.js"
dotenv.config();

const app = express()

const port = process.env.PORT || 5000


app.use('/api/v1/test', testRouters)

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Server is running http://localhost:8080`))