import jwt from "jsonwebtoken";
import user from "../models/user.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const protect = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.token;

    // console.log("Cookies:", req.cookies);
    // console.log("Token:", token);

    if (!token) {
        throw new Error("User not found plz log in");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // console.log("Decoded:", decoded);

        const User = await user.findById(decoded.id);

        // // console.log("User:", User);

        if (!User) {
            throw new Error("User not found");
        }

        req.user = User;

        next();

    } catch (error) {
        // // console.log("JWT ERROR:", error.message);
        throw new Error("Invalid or expired session. Please log in again");
    }
});