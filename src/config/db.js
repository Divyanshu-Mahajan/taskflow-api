const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const { MONGO_URI, DB_NAME } = process.env;

        if (!MONGO_URI || !DB_NAME) {
            throw new Error("Database environment variables are missing");
        }

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${process.env.DB_NAME}`);

        console.log(`\n MongoDB connected !! DB host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

module.exports = connectDB;