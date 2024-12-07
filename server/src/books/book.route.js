const express = require("express");
const {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
} = require("./book.controller");
const router = express.Router();

// post a book
router.post("/create-book", createBook);

router.get("/", getAllBooks);

router.get("/:id", getSingleBook);

router.put("/edit/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;

// frontend => backend server -> controller -> book schema (model) -> db -> send to server -> back to frontend
// post - when submit something frontend to db
// get - when get something back from db
// put/patch = when edit or update something
// delete - when delete something
