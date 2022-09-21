let book = require('../model/model.book');

exports.createBook = async (req, res) => {
    try {
        const newBook = new book({
            name: req.body.name
        });
        await newBook.save();
        res.status(201).send("Book Created Successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.listBooks = async (req, res) => {
    try {
        const books = await book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await book.findByIdAndDelete(req.params.id);
        res.status(200).send("Book Deleted Successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}
