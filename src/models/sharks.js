const { Schema } = require('mongoose');

const Shark = new Schema({
    name: { type: String, required: true },
    character: { type: String, required: true }
});


module.exports = mongoose.model("Shark", Shark);
