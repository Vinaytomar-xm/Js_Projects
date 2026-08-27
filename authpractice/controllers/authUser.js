
import user from "../models/user.js";


const signup = async (req, res) => {
    const { username, email, password } = req.body

    const existing = await user.findOne({ email })
    if (existing) {
        return res.status(409).json({
            success: false,
            message: "Email already exists"
        })
    }

    const newUser = await user.create({
        username,
        email,
        password
    })

    res.status(201).json({
        success: true,
        data: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        }
    })

}

const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide email and password"
        })
    }

    const User = await user.findOne({ email })
    if (!User) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }

    res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
            id: User._id,
            username: User.username,
            email: User.email
        }
    })
}

const getMe = async (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            password: user.password
        },
    })
}

export { signup, getMe, login};