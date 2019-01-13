const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* POST rating info. */
router.get('/user/:id', function(req, res, next) {
    /*Get user info from database*/
    let id = req.params.id
    User.findById(id)
   .then(user => res.json(user))
});

module.exports = router;