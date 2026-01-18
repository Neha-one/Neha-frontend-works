const express=require('express');
const router=express.Router()

//define the home page route
router.get('/',(req,res)=>{
    res.send('blogs home page')
})
//define the about page route
router.get('/about',(req,res)=>{
    res.send('about blog')
})
//define the blogpost page route
router.get('/blogpost',(req,res)=>{
    res.send('blogpost page')
})
//import in main.js file.
module.exports=router