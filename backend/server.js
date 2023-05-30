const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://7pf0czv:asimpossible989@cluster0.2uniyhe.mongodb.net/").then(() => {
    console.log("db connected")
})

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    price:{
        type:Number,
        required:true
    }
})
const cardModel = mongoose.model("cardModel", cardSchema)

app.get("/", async (req, res) => {
    const data = await cardModel.find()
    res.status(200).send(data)
})
app.get("/:id", async (req, res) => {
    const { id } = req.params
    const target = await cardModel.findById(id)
    res.send(target)
})

app.post("/", async (req, res) => {
    const newCard = new cardModel({
        ...req.body
    })
    await newCard.save()
    res.send("item created")
})

app.delete("/:id", async (req, res) => {
    const { id } = req.params
    await cardModel.findByIdAndDelete(id)
    res.send("item deleted")
})

app.listen(8080, () => {
    console.log("app running on 8080")
})