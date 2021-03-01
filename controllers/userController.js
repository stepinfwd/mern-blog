const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createToken = (user) => {
  return (token = jwt.sign({ user }, process.env.SECRET));
};

module.exports.registerValidations = [
  check("name").not().isEmpty().trim().withMessage("name is required"),
  check("email")
    .not()
    .isEmpty()
    .trim()
    .isEmail()
    .withMessage("email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage(
      "password should have a min lenght of 6 characters is required"
    ),
];

// REGISTER
module.exports.register = async function (req, res) {
  const { name, password, email } = req.body;
  //
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ errors: [{ msg: "email already exist" }] });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    try {
      const user = await User.create({
        name,
        email,
        password: hash,
      });
      const token =createToken(user)
      return res.status(200).json({ msg: "its fixed", token });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

// LOGIN
module.exports.loginValidations = [
  check("email")
    .not()
    .isEmpty()
    .trim()
    .isEmail()
    .withMessage("email is required"),
  check("password").not().isEmpty().withMessage("password  is required"),
];
module.exports.login = async function (req, res) {
  const { password, email } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.password);
      if (matched) {
        const token=createToken(user)
        return res.status(200).json({msg:"you have loggged in succesfully",token})
      } else {
        return res
          .status(401)
          .json({ errors: [{ msg: "password is incorrect" }] });
      }
    } else {
      return res.status(401).json({ errors: [{ msg: "User not found or wrong email" }] });
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
