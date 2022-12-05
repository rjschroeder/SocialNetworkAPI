const {Schema,model} = require('mongoose');
const reactionSchema = require("./reaction");

const thoughtSchema = new Schema({
    thoughtText: {
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

thoughtSchema.virtual("reactionCount").get(() => {
    return this.reactions.length;
})

const Thought = model("thought", thoughtSchema);

module.exports = thoughtSchema;