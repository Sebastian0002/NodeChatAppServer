const { response } = require("express");
const User = require("../models/usuario");

const getUsers = async (req,res = response)=>{

    const users = await User
        .find({ _id : { $ne : req.uid }})
        .sort('-online')

    return res.status(200).json({
        'ok': true,
        'msg': "users get",
        users
    });

}

module.exports = {
    getUsers
}

