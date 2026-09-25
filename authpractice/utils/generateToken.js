import jwt from "jsonwebtoken";

export const generatetoken = (userId, role) => {
    //     console.log("JWT_EXPIRE:", process.env.JWT_EXPIRE);
    // console.log("JWT_SECRET:", process.env.JWT_SECRET);


    return jwt.sign(
        { id: userId, role },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        }
    );
};

export const sendCookies = (res, token) => {
    const expires = Number(process.env.COOKIE_EXPIRES);

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: expires * 24 * 60 * 60 * 1000, // Convert days to milliseconds
        path: "/"
    });

};
