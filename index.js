const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mitanshu:abcd1234@react-movie-app.i9lor.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}).then(() =>console.log('DB Connected'))
                                                                                                                                                        .catch(err => console.error(err));

app.get('/', (req,res)=>{
    res.send('Hello World..!!')
});

app.listen(5000);