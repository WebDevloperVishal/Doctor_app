import express from 'express'
import testRouters from "./routes/testRoutes.js"

const app = express()

const port = 8080

// dotenv.config();

app.use('/api/v1/test', testRouters)

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World'))

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ success: true })
})

app.listen(port, () => console.log(`Server is running http://localhost:8080`))