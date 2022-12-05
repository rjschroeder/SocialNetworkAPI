const {Schema,Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId()
    },
    reactionContent: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
)

module.exports = reactionSchema;