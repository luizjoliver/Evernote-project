const mongoose = require("mongoose")

const Note = new mongoose.Schema({
    title:String,
    body:String,
    created_at:{type: Date,default: Date.now},
    updated_at:{type:Date, default: Date.now},
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

Note.index({'title': 'text', 'body': 'text'});

module.exports =  mongoose.model("Note",Note)