import mongoose from "mongoose";

const connectToDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("conneted to db");
    } catch (error) {
        console.log("error in connecting to db",error.message)
    }
}

export default connectToDb;