const express = require('express');
const userController = require('../controller/userController');
const userRouter = express.Router();


userRouter.post('/create', (req, res) => {
    const result = new userController().usercreate(req.body);
    result.then(
        (success) => {
            res.send(success)
        }
    ).catch(
        (error) => {
            res.send(error)
        }
    )
})
module.exports = userRouter