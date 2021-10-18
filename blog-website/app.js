const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
const morgan = require('morgan');
const passport = require('passport');
const cookieParser = require ('cookie-parser');
const session = require('express-session');

const app = express();

/*
*   Routers
*/
const completePostRouter = require('./routers/completePostRouter.js');
const adminRouter = require('./routers/adminRouter.js');
const signInRouter = require('./routers/signInRouter.js');
const authRouter = require('./routers/authRouter.js');

/*
*   View configuration
*/
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('tiny'));
app.use('/resources', express.static(path.join(__dirname, 'resources')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret: 'remorcodes'}));

require('./resources/config/passport.js')(app)

/*
*   Routes configuration
*/
app.use('/completePost', completePostRouter)
app.use('/admin', adminRouter);
app.use('/signin', signInRouter);
app.use('/auth',authRouter);


app.get('/', (req, res) => {

    const url = 'mongodb+srv://dbUser:6fGOHn41aNLVXRFs@blog.ir5ns.mongodb.net?retryWrites=true&w=majority';
    const dbName = 'blog';

    (async function mongo() {
        let client;
        try {
            client = await MongoClient.connect(url);
            console.log('Connected to the mongo DB');

            const db = client.db(dbName);

            const mockupPosts = await db.collection('posts').find().toArray();

            res.render('home', {
                title: 'Home',
                mockupPosts
            });
        } catch (error) {
            console.log(error.stack)
        }
        client.close();
    }());
});

app.listen(3000, () => {
    console.log('Express Server is running...');
});
