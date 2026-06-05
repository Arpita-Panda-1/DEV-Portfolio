const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const contactRoutes = require("./routes/contactRoutes");

const authRoutes = require("./routes/authRoutes");

const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(helmet());

app.use(morgan("dev"));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(limiter);

app.use(cors());

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});