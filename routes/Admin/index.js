const express = require('express');
const router = express.Router();
const addMovie = require("../../controllers/Admin/addMovie");
const Login = require("../../controllers/Admin/login")

router.post('/addMovie', addMovie);
router.post('/login', Login);

module.exports = router;
