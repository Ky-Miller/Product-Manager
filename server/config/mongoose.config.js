const mongoose = require('mongoose');
const dbName = process.env.ATLAS_DB;
const username = process.env.ATLAS_USERNAME;
const cluster = process.env.ATLAS_CLUSTER;
const pw = process.env.ATLAS_PASSWORD;


const uri = `mongodb+srv://${username}:${pw}@${cluster}.mongodb.net/${dbName}?retryWrites=true&w=majority`;



mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${cluster}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));