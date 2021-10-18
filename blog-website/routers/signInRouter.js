const express = require('express');

const signInRouter = express.Router();

signInRouter.route('/').get((req, res) => {

    res.render('signin', {
        title: 'Sign In'
    });

});

module.exports = signInRouter;