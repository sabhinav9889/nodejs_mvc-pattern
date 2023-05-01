const express = require('express');
const {connectMongoDb} = require('./connection');
const bodyParser = require('body-parser');

const app = express();

const userRouter = require('./routes/users');

const PORT = 1000;

app.use(express.urlencoded({ extended: false }));

// parse application/json

connectMongoDb('mongodb://127.0.0.1:27017/newdb').then(()=>{
    console.log("Mongodb is connected");
});

app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log("App is listening at Port 1000");
});