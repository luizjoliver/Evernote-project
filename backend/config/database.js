const moongose = require("mongoose")
moongose.Promise = Promise.global

moongose.connect("mongodb://localhost:27017/evernote",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("Conectado ao mongoDB")
}).catch((err) =>{
    console.log("Erro ao conectar ao mongoDB:" + err);
})