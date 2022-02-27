const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//app.set('views',path.join(__dirname,'views'))
app.set("view engine","hbs")
app.use('/pages',require('./routes/pages').route)
app.use('/api',require('./routes/api').route)
app.use('/',express.static(path.join(__dirname,'public_static')))

app.listen(4444,()=>{
    console.log("Server has started on http://localhost:4444/")
})