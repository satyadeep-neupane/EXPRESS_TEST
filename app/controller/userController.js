let users = require('../model/model.user').users;

exports.listUsers = (req, res) => {
    res.status(200).json(users);
}

// export.middle = (req, res, next) => {
//     console.log('Middleware');
//     // next();
// }

exports.createUser = (req, res) => {
    users.push({
        'id': req.body.id,
        'name': req.body.name
    })
    res.status(200).send("User added successfully");
}

exports.deleteUser = (req, res) => {
    let id = Number(req.params.id);
    users = users.filter(user => { if (user.id !== id) return user });
    res.status(200).send("User deleted successfully");
}