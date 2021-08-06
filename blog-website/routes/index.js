const express = require('express');

const router = express.Router();

server.get('/',(req,res,next)=>{
    res.render('../index.html', {title: 'index'});
})

module.exports = router;