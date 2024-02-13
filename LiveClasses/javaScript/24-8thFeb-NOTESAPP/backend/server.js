const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

let notesDb = [
    { id: 1, content: "This is a note" },
    { id: 2, content: "This is 2 note" },
    { id: 3, content: "This is 3 note" },
    { id: 4, content: "This is 4 note" },
    { id: 5, content: "This is 5 note" },
];

app.get("/notes", (req, res) => {
    res.json({
        success: true,
        data: notesDb,
    });
});

app.post("/notes/new", (req, res) => {
    const { note } = req.body;

    const newobj = {
        id: Date.now(),
        note,
    };
    notesDb.push(newobj);

    res.json({
        success: true,
        data: newobj,
    });
});

app.delete("/notes/:id", (req, res) => {
    const { id } = req.params;
    // notesDb = notesDb.filter((note) => note.id !== id);
    const index = notesDb.findIndex((ele) => ele.id == id);
    if (index === -1) {
        res.status(404).send("record not found");
    }
    const deleatednotes = notesDb.splice(index, 1);
    res.send(deleatednotes[0]).json({
        success: true,
    });
});

app.listen(process.env.PORT || 5000, () =>
    console.log(`Server is running on ${process.env.PORT} PORT`)
);
