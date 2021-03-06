const express = require('express');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');


var fetchuser = require('../middleware/fetchUser');
var JWT_SECREAT = "mynameisbond";
//  Route : 1 create a user using post and "api/auth/createuser" .doesnt required auth

router.post('/createuser', [
  body('name', "Enter a valid name").isLength({ min: 3 }),
  body('email', "Enter a valid email").isEmail(),
  body('password', "Password should be 8 characters").isLength({ min: 6 })
], async (req, res) => {
  let success =false;
  //if there are erros then this bunch of code speacify return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
  //check whether user with this email is exist already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "Sorry a user with this email already exists" });
    }

    /// genrating password hash
    const salt = await bcrypt.genSalt(10);
    secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      password: secPass,
      email: req.body.email,
    })
    //sending jwt token 
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECREAT);
    success=true;
    res.send({success, authToken });
    // res.json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("some errorr are accurr")

  }
})
// Route : 2 create a user using post and "api/auth/login" .doesnt required auth
router.post('/login', [
  body('email', "Enter a valid email").isEmail()
], async (req, res) => {
  let success = false;
  //if there are erros then this bunch of code speacify return bad request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "sorry  use correct email or password" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success=false ;
      return res.status(400).json({ success, error: "sorry  use correct email or password" });

    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECREAT);
    success = true;
    res.json({ success, authToken });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server occured!!");

  }
})


// Route : 3 Get user loggdin User details using post  "api/auth/getuser" .login required
router.post('/getuser', fetchuser, async (req, res) =>{ 
try {
  userId =req.user.id;
  const user = await User.findById(userId).select("-password"); 
  res.send(user);
  
} catch (error) {
  console.log(error.message);
  res.status(500).send("Internal server occured!!");
}
})
module.exports = router