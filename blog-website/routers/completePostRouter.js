const express = require('express');
const {MongoClient, ObjectId} = require('mongodb');

const completePostRouter = express.Router();

//this is how to prevent a user from going to a specific page
// completePostRouter.use((req, res, next)=>{
//     if(res.user){
//         next();
//     }else{
//         res.redirect('/signin');
//     }
// });

completePostRouter.route('/:id').get((req,res)=>{
    const id = req.params.id;
    const url = '';
    const dbName = 'blog';

    (async function mongo(){
        let client;
        try{
            client = await MongoClient.connect(url);
            console.log('Connected to the mongo DB');

            const db = client.db(dbName);

            const mockupPosts = await db.collection('posts').findOne({_id: new ObjectId(id)});
            res.render('completePost',{
                title:'Post',
                mockupPosts
            });
        }catch(error){
            console.log(error.stack)
        }
        client.close();
    }());
});

module.exports = completePostRouter;
