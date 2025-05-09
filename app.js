const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./router/userRouter');
const PORT = process.env.PORT || 3000;
server.use(express.json())
server.use(cors(
    {
        origin: ['http://localhost:5173', 'https://user-registration-hm2t.vercel.app/']
    }
))


server.use('/user', userRouter);

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'marketing'
}).then(
    () => {

        server.listen(PORT, () => {
            console.log('start');

        })
    }
).catch(
    () => {
        console.log('db not connected');

    }
)
