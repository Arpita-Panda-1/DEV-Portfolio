const express = require("express");

const {
    chatWithAI,
} = require("../controllers/aiController");

const router = express.Router();

router.post("/", chatWithAI);

module.exports = router;