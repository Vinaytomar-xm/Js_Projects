import mongoose from "mongoose";

async function mongodbConnected() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    } catch (error) {
        console.log(error);
    }
}
export default mongodbConnected;