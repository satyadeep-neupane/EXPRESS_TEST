let categories = require('../model/model.category').categories;

exports.listCategories = (req, res) => {
    res.status(200).json(categories);
}

exports.createCategory = (req, res) => {
    categories.push({
        'id': req.body.id,
        'name': req.body.name
    })
    res.status(200).send("Category added successfully");
}

exports.deleteCategory = (req, res) => {
    let id = Number(req.params.id);
    categories = categories.filter(category => { if (category.id !== id) return category });
    res.status(200).send("Category deleted successfully");
}