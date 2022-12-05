const {Schema,Types} = require('mongoose');
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema({
    thoughtContent: {
        type: String,
        required: true
    },
    username: {
        type:String,
        required: true
    },
    reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id:false
    }
)

module.exports = thoughtSchema;