const app = require("express");
const { register, registerValidations,login,loginValidations } = require("../controllers/userController");
const router = app.Router();
// @@Route POST /register
// @@Desc Getting registred users
router.post("/register",registerValidations, register);
// @@Route POST /login
// @@Desc login users
router.post("/login",loginValidations, login);
module.exports = router;
