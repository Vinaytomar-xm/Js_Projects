
import user from "../models/user.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generatetoken, sendCookies } from "../utils/generateToken.js";


const signup = async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields"
        });
    }

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

    const token = generatetoken(newUser._id, newUser.role)

    // res.sendCookies(token)
    sendCookies(res, token)

    res.status(201).json({
        success: true,
        data: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        }
    })

}

const login = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;


    // console.log(username, email, password)
    if ((!username && !email) || !password) {
        return res.status(400).json({
            success: false,
            message: "Please provide email and password"
        });
    }

    const User = await user.findOne({
        $or: [
            { email },
            { username }
        ]
    });
    // console.log(User)

    if (!User) {
        return res.status(404).json({
            success: false,
            message: "Incorrect email/username or password"
        });
    }
    
    // console.log("USER FOUND:", User?.username);
    // console.log("ENTERED PASSWORD:", password);
    // console.log("STORED PASSWORD:", User?.password);
    // console.log("PASSWORD TYPE:", typeof User?.password);

    const isCorrect = await User.comparePassword(password);

    // console.log("MATCH:", isCorrect);

    if (!isCorrect) {
        // await User.save({ validateBeforeSave: false });
        return res.status(401).json({
            success: false,
            message: "Incorrect email/username or password"
        });
    }

    // await User.save({ validateBeforeSave: false });
    const token = generatetoken(User._id, User.role);

    sendCookies(res, token);

    res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
            id: User._id,
            username: User.username,
            email: User.email
        }
    });
});

export const logout = asyncHandler(async (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        path: "/"
    });

    return res.status(200).json({
        success: true,
        message: "Logout successful"
    });
});

const getMe = asyncHandler(async (req, res) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        },
    })
})

export { signup, getMe, login };