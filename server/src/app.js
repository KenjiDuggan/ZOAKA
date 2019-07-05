const PORT = 8081; 
const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const morgan = require('morgan');

const app = express(); 
app.use(morgan.use('combine')); 
app.use(bodyParser.json()); 
app.use(cors()); 

app.get('/', (req, res) =>{
    res.send({
        message: "HelloWorld!"
    })
})

app.listen(process.env.PORT || PORT); 