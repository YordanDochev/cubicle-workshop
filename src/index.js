const express = require("express");
const { expressConfig } = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");
const dbConnect = require("./config/dbConfig");
const routes = require("./route");

const app = express();

const PORT = 5000;

//ExpressConfig
expressConfig(app);

//HandlebarsConfig
handlebarsConfig(app);

//Db Connect

dbConnect()
    .then(()=>console.log('Db connected sucessfuly'))
    .catch(err=>{
        console.log('Erorr:',err);
    })

//Router

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
