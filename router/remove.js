const express = require("express");
const router = express.Router();
const ToDoTask = require("../models/toDoTask");

router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await ToDoTask.findByIdAndDelete(id);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internl Server Error");
    }
});

module.exports = router;
