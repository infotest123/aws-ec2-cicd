const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello from AWS EC2 🚀</h1>
        <p>GitHub Actions CI/CD deployment is working!</p>
        <p>Version: 1.0</p>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});