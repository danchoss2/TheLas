import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/gaster');
        console.log("DB is Connected");
    } catch (error) {
        console.log(error);
    }
};
