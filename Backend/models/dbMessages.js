const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const messageShema = new Schema({
        name: {
            type: String,
            required: true,
        },
        messages : String,
        timestamp : {
            type: String,
            required: true,
        },
        uid : {
            type: String,
            required: true,
        },
        roomId: {
            type: String,
            required: true,
        },
    },
{
    timestamps: true,
}
)

module.exports = mongoose.model('messages', messageShema);