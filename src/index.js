const express = require('express');
const handlebars = require('express-handlebars')
const path = require('path')

const app = express();

const PORT = 5000;

//ExpressConfig

app.use(express.static(path.resolve(__dirname,'public')))

//HandlebarsConfig
app.engine('hbs',handlebars.engine({
    extname:'hbs',
}))
app.set('view engine','hbs')
app.set('views','src/views')

//Router
app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));