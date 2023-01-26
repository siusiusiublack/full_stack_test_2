const express  =require('express');
const noteRouter = express.Router();
const Note = require("../models/noteModel")

noteRouter.route("/create").post((req,res)=>{
    const title = req.body.title;
    const content = req.body.content;
    const newNote = new Note({
        title:title,
        content:content
    });
    
    newNote.save()
    
    
})

noteRouter.route("/notes").get((req,res)=>{
    console.log(req)
    Note.find()
        .then(foundNotes => res.json(foundNotes))
        .catch((err)=>{console.log(err)})
})

module.exports = noteRouter;