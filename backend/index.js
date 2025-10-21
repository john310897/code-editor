const express=require('express')
const cors=require('cors')
const app=express()

app.use(cors({
  origin: 'https://verbose-succotash-p6grp74g5v53rp55-5173.app.github.dev',
  methods: ['GET', 'POST'],
  credentials: true
}));


app.use('/',(req,res)=>{
    res.send({
        message:'this is the message from the server'
    })
})

app.listen(3001,()=>{
    console.log('server is running on port 3001')
})