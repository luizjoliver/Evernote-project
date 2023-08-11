const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const jwt = require("jsonwebtoken");
const withAuth = require('../middlewares/auth');


router.post("/register",userController.register)
router.post("/login",userController.login)
router.put("/",withAuth,userController.updateNameAndEmail)
router.put("/password",withAuth,userController.updatePassword)
router.delete("/",withAuth,userController.deleteUser)


module.exports = router;
