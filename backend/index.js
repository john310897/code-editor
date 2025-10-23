const express = require('express')
const cors = require('cors')
const app = express()
const PORT=3001;

const corsOptions={
 origin: 'https://john310897.github.io',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-type', 'Authorization', 'Access-Control-Allow-Origin'],
    credentials: true
}

app.use(cors(corsOptions));


app.use('/', (req, res) => {
    res.send({
        message: 'this is the message from the server'
    })
})

app.get('/one-compiler-api',(req,res)=>{
    res.send({
        apiKey:process.env.API_KEY
    })
})

app.listen(PORT, () => {
    console.log('server is running on port '+PORT)
})