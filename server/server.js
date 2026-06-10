require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Portfolio API Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/contact", contactRoutes);

app.use("/api/ai", aiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `🚀 Server running on port ${PORT}`
    );
});