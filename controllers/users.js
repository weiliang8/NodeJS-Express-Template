const User = require("../models/users");

exports.createUser = async (req, res, next) => {
    console.log(req.body);
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });

    res.status(200).json({ success: true });
};

exports.getAllUsers = async (req, res, next) => {
    data = await User.find();

    res.status(200).json({
        success: true,
        data,
    });
};

exports.updateUser = async (req, res, next) => {
    let user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    user.then(function (val) {
        res.status(200).json({
            success: true,
            data: user,
        });
    });
};

exports.deleteUser = async (req, res, next) => {
    await User.findOneAndDelete({ id: req.params.id }).then(function (val) {
        res.status(200).json({
            success: true,
        });
    });
};
