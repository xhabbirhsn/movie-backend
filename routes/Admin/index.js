const express = require('express');
const router = express.Router();
const addMovie = require("../../controllers/Admin/addMovie");
const Login = require("../../controllers/Admin/login");
const genrateTMDBimgLink = require('../../controllers/Admin/generateTMDBImg');

router.post('/addMovie', addMovie);
router.post('/login', Login);
router.post('/generateBanner', genrateTMDBimgLink)

module.exports = router;
