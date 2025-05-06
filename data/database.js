const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongo').MongoClient;

let database;

const intDb = (callback) => {
    if(database) {
        console.log('Db is already initialized');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
        database = client;
        callback(null, database);
    })
    .catch((err) => {
        callback(err);
    })
    };