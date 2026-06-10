require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

const createAdmin = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );

        const hashedPassword =
            await bcrypt.hash(
                "Admin@123",
                10
            );

        await User.create({
            name: "Arpita Panda",
            email: "admin@gmail.com",
            password: hashedPassword,
        });

        console.log(
            "Admin Created Successfully"
        );

        process.exit();
    } catch (error) {
        console.log(error);
    }
};

createAdmin();