const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

//app configuration
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.use('/resources',express.static(path.join(__dirname,'resources')));

app.get('/',(req,res)=>{
    res.render('home', {title: 'Home'});
})

app.listen(3000,()=>{
    console.log('Express Server is running...');
})
