const User = require('../models/user');

async function addUser(req, res){
    const body = req.body;
    const result =  await User.create({
        firstname: body.firstname,
        email: body.email,
        jobtitle: body.jobtitle,
        gender: body.gender,
    });
    console.log(result);
    return res.json({ status: "Success" });
}

module.exports = {
    addUser,
}