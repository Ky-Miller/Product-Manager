const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.ATLAS_PORT;
const cors = require ('cors')


require('./config/mongoose.config')


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors());


const routeAttacher = require('./routes/product.routes')
routeAttacher(app)


app.listen( port, () => console.log(`Listening on port: ${port}`) );
