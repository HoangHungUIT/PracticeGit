const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "Test_project")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Test_project", "test_index.html"));
});

const server = app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
