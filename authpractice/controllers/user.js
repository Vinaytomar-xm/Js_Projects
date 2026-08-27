import User from "../models/user.js"

const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please log in first.."
        });
    }

    const exist = await User.findOne({ email });

    if (exist) {
        return res.status(409).json({
            success: false,
            message: "Email already exists"
        });
    }

    const newUser = await User.create({
        username,
        email,
        password
    })

    res.status(201)
        .json({
            success: true,
            data: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            }
        })
};

const getMe = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id })
    if (!user) {
       return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    res.status(200).json({ success: true, data: user });
}

export { createUser, getMe };