 const express = require('express');
const app = express(); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config'); 
const port = process.env.PORT || 3000; 
const cookieSession = require('cookie-session'); 
const authRoutes = require('./routes/auth-routes');

mongoose.connect('mongodb://localhost:27017/zoaka', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false); 
mongoose.Promise = global.Promise; 

app.use(morgan('combined')); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors()); 

const Users = require('./controllers/User');

//cookie-sesison
app.use(cookieSession({
    maxAge: 24*60*60*1000, 
    keys: [keys.session.cookieKey]
}));

//initialize passport 
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use('/auth', authRoutes);

app.listen(3000, function () {
    console.log('Server is listening ' + port + ' ......')
}); 
