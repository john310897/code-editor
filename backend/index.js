const express = require('express')
const cors = require('cors')
const app = express()

const corsOptions={
 origin: 'https://john310897.github.io',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-type', 'Authorization', 'Access-Control-Allow-Origin'],
    credentials: true
}

app.use(cors(corsOptions));


app.use('/', (req, res) => {
    res.send({
        apiKey:process.env.API_KEY,
        message: 'this is the message from the server'
    })
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
})