const { users } = require("../utils/usersData");

module.exports.getAllUsers = async (req, res, next) => {
    try {
        return res.status(201).send({ message: "user data Fetched Successfully", data: users });
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }

}

module.exports.getUserProfile = async (req, res, next) => {
    try {
        const find = users.filter(user => user?.id == req.params.id)
        if (!find)
            return res.status(404).send({ error: true, message: "user not found with associated id" });

        return res.status(200).send({ message: "User data fetched successfully", data: find });
    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }

}

module.exports.createUser = async (req, res, next) => {
    try {
        const newUser = {
            id: users?.length + 1,
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            age: req?.body?.age,
            email: req?.body?.email,
            phone: req?.body?.phone,
            username: req?.body?.username,
        };

        users.push(newUser);
        const find = users.filter(user => user?.id == newUser?.id);
        if (!find)
            return res.status(404).send({ error: true, message: "Error Occured while user" });
        
        return res.status(201).send({ message: "User created successfully", data: find });

    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }

}

module.exports.updateUserProfile = async (req, res, next) => {
    try {
        
        const userIndex = users.findIndex((user) => user.id == req.params.id);

        if (userIndex === -1) {
            return res.status(404).json({ error: true, message: "User not found with the specified ID." });
        }

        users[userIndex] = {
            ...users[userIndex],
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            age: req?.body?.age,
            email: req?.body?.email,
            phone: req?.body?.phone,
            username: req?.body?.username,
        };

        res.status(200).json({ message: "User updated successfully", data: users[userIndex] });

    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }

}


module.exports.deleteUserProfile = async (req, res, next) => {
    try {

        const userIndex = users.findIndex((user) => user.id == req.params.id);

        if (userIndex === -1) {
            return res.status(404).json({ error: true, message: "User not found with the specified ID." });
        }

        users.splice(userIndex, 1);
        res.status(200).json({ message: "User profile deleted successfully"});

    } catch (err) {
        res.status(500).send({ message: "Internal Server Error" });
    }

}