const express = require('express');
const { MongoClient,ObjectID } = require('mongodb');
const passport = require('passport');

const authRouter = express.Router();

authRouter.route('/signin').post(passport.authenticate('local',{
    successRedirect: '/auth/profile',
    failureMessage: '/'
}));

authRouter.route('/profile').get((req,res)=>{
    res.json(req.user)
});

/*
* This part creates an user in the database and was created as a learning opportunity. It is not implemented as I 
* do not have the intention of having users in my website for now (besides my own).
* 

authRouter.route('/signup').post((req,res)=>{
    
    const {email,password} = req.body;

    const url = '';
    const dbName = 'blog';

    (async function addUser(){
        let client;
        try{
            client = await MongoClient.connect(url);

            const db = client.db(dbName);
            const user = {email,password};
            console.log(user);
            const results = await db.collection('users').insertOne(user);
            console.log(results);

        }catch(err){
            console.log(err);
        }

        client.close();
    }())
    

    req.login(user, ()=>{
        res.redirect('/auth/profile');
    })

});

*/

module.exports = authRouter;
