const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const transactions = require("./models/transactions")
const transactionsController = require("./controllers/transactionsController")

app.use((req, res, next) => {
  console.log("This code runs for every request")
  next()
})

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
app.use("/transactions", transactionsController)

app.get("/", (req, res) => {
  res.send("Welcome to the Budget App")
})

app.get("*", (req, res) => {
  res.status(404).json({ error: "Page Not Found " })
})

module.exports = app
