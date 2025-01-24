const express = require("express");
const app = express();
const edit = require("./router/edit");
const remove = require("./router/remove");
const ToDoTask = require("./models/toDoTask");
const { connectMongo } = require("./database/mongodb");

app.use(express.json());
app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

connectMongo().catch(console.error);

app.set("view engine", "ejs");
app.use("/edit", edit);
app.use("/remove", remove);

app.get("/", async (req, res) => {
    response = await ToDoTask.find({});
    console.log(response);
    res.render("todo.ejs", { toDoTasks: response });
});

app.post("/", async (req, res) => {
    const task = new ToDoTask({
        taskName: req.body.content,
    });

    try {
        await task.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
});

app.listen(3000, () => console.log("Server is listening to port 3000"));
