const express = require("express")
const notesController = require("../controllers/notesController")
const router = express.Router()
const withAuth = require("../middlewares/auth")


router.get("/",withAuth,notesController.findAll)
router.post("/",withAuth,notesController.createNote)
router.get("/search",withAuth,notesController.search)
router.get("/:id",withAuth,notesController.findById)
router.put("/:id",withAuth,notesController.updateNote)
router.delete("/:id",withAuth,notesController.deleteNote)


module.exports = router