const express = require("express");
const router = express.Router();
const ToDoTask = require("../models/toDoTask");

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const tasks = await ToDoTask.find({});
        res.render("todoEdit.ejs", { todoTasks: tasks, idTask: id });
    } catch (err) {
        console.error(err);
        res.status(500).send("Internl Server Error");
    }
});

router.post("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await ToDoTask.findByIdAndUpdate(id, { taskName: req.body.content });
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
