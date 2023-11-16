const express = require('express')
const router =express.Router()
const path=require('path')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
    // res.send("Hello")
})

router.get('/about',(req,res)=>{
    res.send("This is about page")
})


module.exports=router
