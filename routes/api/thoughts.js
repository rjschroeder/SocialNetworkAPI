const router = require("express").Router();
const {getThoughts,getSingleThought,createThought,updateThought,deleteThought,addReaction,removeReaction} = require("../../controllers/");
//once controller is created put name here

router.route("/")
    .get(getThoughts)
    .post(createThought);

router.route("/:thoughtId")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router.route("/:thoughtId/reactions")
    .post(addReaction)

router.route("/:thoughtId/reaction/:reactionId")
    .delete(removeReaction);

module.exports = router;