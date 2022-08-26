const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

const appPort = 8080
const mongoUrl = "mongodb+srv://admin:UYsGgL2EBWejFUSz@cluster0.htf72x1.mongodb.net/?retryWrites=true&w=majority"

const app = express()
app.use(bodyParser.json())
app.use(cors())

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}

mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
          app.listen(appPort, () => console.log(`Server is running on port ${appPort}`))
        })
        .catch(err => console.log(`Error connecting to mongo: ${mongoUrl}`, err))

const UsersSchema = new mongoose.Schema({
  username: String,
  linkToImage: String,
  a: Number
})

const NewsSchema = new mongoose.Schema({
  title: String,
  text: String,
  imageLink: String,
  dateCreated: Date
})

mongoose.model("Users", UsersSchema)
mongoose.model("News", NewsSchema)
const Users = mongoose.model("Users")
const News = mongoose.model("News")

//Controller

const getAllUsers = (req, res) => {
  console.log("getAllUsers called")
  Users.find()
       .exec()
       .then(users => res.json(users))
       .catch(err => res.status(500).json(err))
}

const createUser = (req, res) => {
  console.log("createUser called")
  Users.create(req.body)
       .then(createUsers => res.json(createUsers))
       .catch(err => res.status(500).json(err))
}

const getAllNews = (req, res) => {
  console.log("getAllNews called")
  News.find()
      .exec()
      .then(news => res.json(news))
      .catch(err => res.status(500).json(err))
}

const createNews = (req, res) => {
  console.log("createNews called")

  const news = req.body
  news.dateCreated = Date.now()

  News.create(news)
      .then(createNews => res.json(createNews))
      .catch(err => res.status(500).json(err))
}

const updateNews = (req, res) => {
  console.log("updateNews called")
  News.findByIdAndUpdate(req.body.id, req.body, {new: true})
      .exec()
      .then(news => res.json(news))
      .catch(err => res.status(500).json(err))
}

// Routes

app.get("/users", cors(corsOptions), getAllUsers)
app.post("/users", cors(corsOptions), createUser)
app.get("/news", cors(corsOptions), getAllNews)
app.post("/news", cors(corsOptions), createNews)
app.put("/news", cors(corsOptions), updateNews)
