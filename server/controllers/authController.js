const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET = "your_secret_key";

// Signup
exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        const user = new User({ username, email, password });
        await user.save();

        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1d" });
        res.status(201).json({ token, username: user.username });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1d" });
        res.status(200).json({ token, username: user.username });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
