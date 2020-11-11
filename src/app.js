const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = express.Router();
const path = __dirname + '/views/';
const port = 8080;
const sharks = require('./routes');

dotenv.config();
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env

const url =
    `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connection suceeded'))
    .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path));
app.engine('html', require('ejs').renderFile);
app.use('/sharks', sharks);
app.set('view engine', 'html');

app.set('views', path);

app.use('/', router);
app.listen(port, function () {
    console.log('web app running on port 8080!')
})