const Book = require("./book.model");

const createBook = async (req, res) => {
    // console.log(req.body);
    try {
        const newBook = await Book({
            ...req.body,
        });
        await newBook.save();
        res.status(201).send({
            message: "Book created successfully",
            data: newBook,
        });
    } catch (error) {
        console.error("Error creating book", error);
        res.status(500).send({ message: "Failed to create book" });
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).send(books);
    } catch (error) {
        console.error("Error getting books", error);
        res.status(500).send({ message: "Failed to get books" });
    }
};

const getSingleBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send(book);
    } catch (error) {
        console.error("Error fetching book", error);
        res.status(500).send({ message: "Failed to fetch book" });
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedBook) {
            res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({ message: "Book updated", data: updatedBook });
    } catch (error) {
        console.error("Error updating book", error);
        res.status(500).send({ message: "Failed to update book" });
    }
};

const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            res.status(404).send({ message: "Book not found" });
        }
        res.status(200).send({
            message: "Book deleted successfully",
            data: deletedBook,
        });
    } catch (error) {
        console.error("Error deleting book", error);
        res.status(500).send({ message: "Failed to delete book" });
    }
};

module.exports = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
