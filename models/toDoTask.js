const mongoose = require("mongoose");
const toDoTaskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("ToDoTask", toDoTaskSchema);
