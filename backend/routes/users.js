const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json(`User ${req.params.id} deleted`))
    .catch(err => res.status(400).json(`Error: ${err}`));
});
router.route('/add').post((req, res) => {
   const title = req.body.title;

   const newUser = new User({title});

   newUser.save()
   .then(() => res.json('User added!'))
   .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
