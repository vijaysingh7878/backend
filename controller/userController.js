const userModel = require("../model/userModel")

class userController {
    usercreate(data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const newUser = new userModel({
                        name: data.name,
                        class: data.class,
                        pincode: data.pincode,
                        email: data.email,
                        phone: data.phone,
                        category: data.category
                    })
                    newUser.save().then(
                        () => {
                            resolve({
                                msg: 'user created',
                                status: 1,
                                data: data
                            })
                        }
                    ).catch((error) => {
                        console.log(error);

                        reject({
                            msg: 'user not created',
                            status: 0,
                        })
                    })
                } catch (error) {
                    reject({
                        msg: 'Internal server error',
                        status: 0,
                    })
                }
            }
        )
    }
}

module.exports = userController