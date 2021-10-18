const passport = require('passport');
const { Strategy } = require('passport-local');
const {MongoClient} = require('mongodb');


module.exports = function localStrategy() {
    passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, (email, password, done) => {
        const url = 'mongodb+srv://dbUser:6fGOHn41aNLVXRFs@blog.ir5ns.mongodb.net?retryWrites=true&w=majority';
        const dbName = 'blog';

        (async function validateUser() {
            let client;
            try {
                client = await MongoClient.connect(url);

                const db = client.db(dbName);

                const user = await db.collection('users').findOne({email});

                if(user && user.password === password){
                    done(null, user);
                }else {
                    done(null,false);
                }

            } catch (err) {
                done(err, false);
            }
            client.close();
        }())
    }));
}