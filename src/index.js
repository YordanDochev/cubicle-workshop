const express = require('express');
const {expressConfig} = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const app = express();

const PORT = 5000;

//ExpressConfig
expressConfig(app)

//HandlebarsConfig
handlebarsConfig(app)


//Router
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));