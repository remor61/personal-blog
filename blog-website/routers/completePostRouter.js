const express = require('express');
const mockupPosts = require('../resources/data/mockupPosts.json');

const completePostRouter = express.Router();

completePostRouter.route('/:id').get((req,res)=>{
    const id = req.params.id;
    res.render('completePost',
    {
        title: 'Complete Post',
        mockupPosts: mockupPosts[id]
    });
});

module.exports = completePostRouter;