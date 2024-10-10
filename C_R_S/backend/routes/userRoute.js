const express = require("express");
const router = express.Router();
const authController = require('../controller/authController')
const studentController = require("../controller/studentController")
const server =require('../server')


router.post("/Uregister", authController.Uregister );
router.post("/Ulogin", authController.Ulogin );
router.get('/:id/applications',studentController.Student)

module.exports = router;
