const {Thought, User} = require("../models");

const userController = {
    getUsers(req, res) {
        try {
            User.find()
            .select("-__v")
            .then((response) => {
                res.json(response)
            })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getSingleUser(req, res) {
        try {
            User.findOne({_id: req.params.userId})
                .select("-__v")
                .populate("friends")
                .populate("thoughts")
                .then((response) => {
                    if(response){
                        res.json(response)
                    } else {
                        return res.status(500).json({message: "No user"})
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    createUser(req, res) {
        try {
            User.create(req.body)
                .then((response) => {
                    res.json(response)
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateUser(req, res) {
        try {
            User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {
                    runValidators: true,
                    new: true
                }
            )
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No user with this id"})
                    } else {
                        res.json(response)
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteUser(req, res) {
        try {
            User.findOneAndDelete({_id:req.params.userId})
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No user with this id"})
                    }
                })
                .then(() => {
                    res.json({message: "Success!"})
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    addFriend(req, res) {
        try {
            User.findOneAndUpdate(
                {_id:req.params.userId},
                {$addToSet: {friends: req.params.friendId}},
                {new: true}
            )
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No user with this id"})
                    } else {
                        res.json(response)
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    removeFriend(req, res) {
        try {
            User.findOneAndUpdate(
                {_id:req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {new: true}
            )
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No user with this id"})
                    } else {
                        res.json(response)
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = userController;