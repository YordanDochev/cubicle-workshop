const express = require('express');
const {expressConfig} = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

const app = express();

const PORT = 5000;

//ExpressConfig
expressConfig(app)

//HandlebarsConfig
handlebarsConfig(app)

//Router
app.use(homeController)

app.use('/cubes',cubeController)

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));