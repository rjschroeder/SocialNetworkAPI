const {Thought, User} = require("../models");

const thoughtController = {
    getThoughts(req, res) {
        try {
            Thought.find()
            .sort({createdAt:-1})
            .then((response) => {
                res.json(response)
            })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    getSingleThought(req, res) {
        try {
            Thought.findOne({_id: req.params.thoughtId})
                .then((response) => {
                    if(response){
                        res.json(response)
                    } else {
                        return res.status(500).json({message: "No thought"})
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    createThought(req, res) {
        try {
            Thought.create(req.body)
                .then((response) => {
                    return User.findOneAndUpdate(
                        {_id: req.body.userId},
                        {$push: {thoughts: response._id}},
                        {new: true}
                    )
                })
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No user with this id"})
                    } else {
                        res.json({message: "Success!"})
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateThought(req, res) {
        try {
            Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {
                    runValidators: true,
                    new: true
                }
            )
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No thought with this id"})
                    } else {
                        res.json(response)
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteThought(req, res) {
        try {
            Thought.findOneAndRemove({_id:req.params.thoughtId})
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No thought with this id"})
                    } else {
                        return User.findOneAndUpdate(
                            {thoughts: req.params.thoughtId},
                            {$pull: {thoughts: req.params.thoguhtId}},
                            {new:true}
                        )
                    }
                })
                .then((response) => {
                    if(!response) {
                        return res.status(500).json({message: "No user with this id"})
                    } else {
                        res.json({message: "Success!"})
                    }
                })
        } catch (err) {
            res.status(500).json(err)
        }
    },
    addReaction(req, res) {
        try {
            
        } catch (err) {
            res.status(500).json(err)
        }
    },
    removeReaction(req, res) {
        try {
            
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = thoughtController;