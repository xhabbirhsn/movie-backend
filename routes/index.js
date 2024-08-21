const express = require('express');
const router = express.Router();
const getMovieList = require("../controllers/getMovieList");


router.get('/getMovie', getMovieList);

module.exports = router;
