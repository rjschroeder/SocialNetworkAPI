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
            
        } catch (err) {
            res.status(500).json(err)
        }
    },
    updateThought(req, res) {
        try {
            
        } catch (err) {
            res.status(500).json(err)
        }
    },
    deleteThought(req, res) {
        try {
            
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