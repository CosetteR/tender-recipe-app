const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => { //if the url is /user/, then the below is what happens
  User.find() //finds list of user from database
    .then(users => res.json(users)) //returns users we got from the database
    .catch(err => res.status(400).json('Error: ' + err)); //if theres an error, we return error message
});

router.route('/add').post((req, res) => { //if the url is /user/add, then the below is what happens
  const userName = req.body.userName; //setting input to variable
  const password = req.body.password;
  const newUser = new User({
    userName,
    password
  }); //creates new instance of user with this data

  newUser.save() //user is saved to database
    .then(() => res.json('User added!')) //returns the message
    .catch(err => res.status(400).json('Error: ' + err)); //else returns error message
});

module.exports = router;
