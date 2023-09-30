const express = require('express');
const {expressConfig} = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const routes = require('./route')

const app = express();

const PORT = 5000;

//ExpressConfig
expressConfig(app)

//HandlebarsConfig
handlebarsConfig(app)

//Router

app.use(routes)

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}`));