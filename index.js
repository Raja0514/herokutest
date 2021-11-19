
const express=require('express')

const app=express()

app.get("/",(req,res)=>{

    res.send("welcome server")
})

app.listen(3002,()=>{
    console.log("server running at port no 3002")
})