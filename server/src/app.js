const PORT = 8081; 
const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const morgan = require('morgan');

const app = express(); 
app.use(morgan('combined')); 
app.use(bodyParser.json()); 
app.use(cors()); 

app.get('/register', (req, res) =>{
    res.send({
        message: "Hello Your user was registered have fun!"

    })
})

app.listen(process.env.PORT || PORT); 