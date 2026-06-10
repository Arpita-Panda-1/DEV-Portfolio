const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log(
            "✅ MongoDB Connected Successfully"
        );
    } catch (error) {
        console.log(
            "❌ MongoDB Connection Failed"
        );

        console.log(error.message);

        console.log(
            "⚠️ Server will continue running without MongoDB"
        );
    }
};

module.exports = connectDB;