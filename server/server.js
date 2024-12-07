const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:5173/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

// routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
    await mongoose.connect(process.env.MONGO_URI);

    app.get("/", (req, res) => {
        res.send("Book Store server is running");
    });
}

main()
    .then(() => {
        console.log("Mongodb connected successfully");
    })
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
