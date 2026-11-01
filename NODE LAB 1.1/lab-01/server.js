
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my Express server!");
});

app.get("/about", (req, res) => {
    res.json({
        name: "sriketh",
        section: "CSE GEN AI 304"
    });
});

app.get("/time", (req, res) => {
    res.json({
        time: new Date()
    });
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
