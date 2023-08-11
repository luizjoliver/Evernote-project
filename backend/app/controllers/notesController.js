const Note = require("../models/note")



const notesController = {
    createNote:async(req,res) =>{

        const {title,body} = req.body
        
        try {
            const newNote = new Note({title: title,body:body,author: req.user._id})
            await newNote.save()
            res.status(201).json(newNote)
        } catch (error) {
            console.log(error);
            res.status(500).json({error:"Problem to create a new note"})
        }
    },
    findById:async(req,res) =>{
        try {
            const {id} = req.params
            const note = await Note.findById(id)
            if(isOnwer(req.user,note)){
                res.json(note)
            }else{
                res.status(403).json({error:"Permisson denied"})
            }
        } catch (error) {
            res.status(500).json({error:"Problem to get a note"})
        }
    },
    findAll:async(req,res) =>{ 
        try {
            const notes = await Note.find({author: req.user._id})
            res.json(notes)
        } catch (error) {
            res.status(500).json({error: error})
        }

    },
    updateNote:async(req,res) =>{
        const{title,body} = req.body
        const{id} = req.params
        try {
            const note = await Note.findById(id)
            if(isOnwer(req.user,note)){
                const updatedNote = await Note.findOneAndUpdate(
                    {_id: id},
                    { $set: { title: title, body: body}},
                    { upsert: true, 'new': true }
                  )
                res.json(updatedNote)
            }else{
                res.status(403).json({error:"Permisson denied"})
            }
           
            
        } catch (error) {
            console.log(error);
            res.status(500).json({error:"Problem to update a note"})
        }
    },
    deleteNote:async(req,res)=>{
        const {id} = req.params
        try {
            const note = await Note.findById(id)
            if(isOnwer(req.user,note)){
                await note.deleteOne()
                res.json({message:"Note Deleted"}).status(204)
            }else{
                res.status(403).json({error:"Permisson denied"})
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({error:"Problem to delete a note"})
        }
    },
    search:async(req,res) =>{
        const {query} = req.query
        try {
          let notes = await Note
          .find({author:req.user._id})
          .find({$text:{$search:query}})
            res.json(notes)
        } catch (error) {
            res.json({error:error}).status(500)
        }
    }
}

//service Note
const isOnwer = (user,note) =>{
    if(JSON.stringify(user._id) == JSON.stringify(note.author._id)){
        return true
    }else{
        return false
    }
}

module.exports = notesController