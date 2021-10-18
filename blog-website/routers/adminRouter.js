const express = require('express');
const {MongoClient} = require('mongodb');
const mockupPosts = require('../resources/data/mockupPosts.json');


const adminRouter = express.Router();

adminRouter.route('/').get((req,res)=>{
    const url = '';
    const dbName = 'blog';

    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            console.log('Connected to the mongo DB');

            const db = client.db(dbName);

            const response = await db.collection('posts').insertMany(mockupPosts);
            res.json(response);
        }catch(error){
            console.log(error.stack)
        }
        client.close();
    }());
});

module.exports = adminRouter;
