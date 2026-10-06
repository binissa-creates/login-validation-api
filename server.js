const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Login Validation API is working!"
    });
});

// Login validation
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Check empty fields
    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Username and password are required."
        });
    }

    // Test credentials
    if (username === "admin" && password === "admin123") {

        return res.status(200).json({
            success: true,
            message: "Login successful!"
        });

    } else {

        return res.status(401).json({
            success: false,
            message: "Invalid username or password."
        });

    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`API running on port ${PORT}`);
});