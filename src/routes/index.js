const express = require('express');
const router = express.Router();
const path = require('path');

const shark = require('../controllers/shark');

router.get('/', function (req, res) {
    shark.index(req, res);
});
router.post('/addshark', function (req, res) {
    shark.create(req, res);
});
router.get('/getshark', function (req, res) {
    shark.list(req, res);
});
module.exports = router;