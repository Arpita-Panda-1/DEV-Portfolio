const express = require("express");
const generateToken = require("../utils/generateToken");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (
        email === "admin@gmail.com" &&
        password === "admin123"
    ) {
        return res.json({
            token: generateToken(email),
        });
    }

    res.status(401).json({
        message: "Invalid Credentials",
    });
});

module.exports = router;