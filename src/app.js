const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = express.Router();
const path = __dirname + '/views/';
const port = 8080;

dotenv.config();

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});
router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});
router.get('/sharks', function (req, res) {
    res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);
app.listen(port, function () {
    console.log('web app running on port 8080!')
})