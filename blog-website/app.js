const express = require('express');
const path = require('path');

const mockupPosts = require('./resources/data/mockupPosts.json');
const app = express();

//routers
const completePostRouter = require('./routers/completePostRouter.js');

//debug stuff
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

//views configuration
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//routes configuration
app.use('/resources',express.static(path.join(__dirname,'resources')));
app.use('/completePost',completePostRouter)

app.get('/',(req,res)=>{
    res.render('home', 
    {
        title: 'Home',
        mockupPosts
    });
})

app.listen(3000,()=>{
    console.log('Express Server is running...');
})
