const {Schema,Types} = require('mongoose');

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => Types.ObjectId()
    },
    reactionText: {
        type: String,
        required: true,
        maxlength: 280
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