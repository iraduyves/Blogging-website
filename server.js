const express=require('express');
const path=require('path');

let initia_path=path.join(__dirname,"public");

const path=expres();
app.use(express.static(initial_path));

app.get('/',(req,res)=>{
    res.sendFile(path.join(initia_path,"home.js"));
})

app.listen("3000",( )=>{
    console.log('Listening......')
}) 