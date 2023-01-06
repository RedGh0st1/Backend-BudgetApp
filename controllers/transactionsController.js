const express = require("express")
const transactions = express.Router()
const { validateURl } = require("../models/validations")
const transactionsArray = require("../models/transactions")

transactions.use((req, res, next) => {
  console.log("This middleware runs for EVERY transactions route")
  next()
})

// GET ROUTE FOR /transcations (app.use in app.js handles the entry point for the controller)
// SHOW ALL TRANSACTIONS
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray)
})

// create transaction endpoint with POST
transactions.post("/", validateURl, (req, res) => {
  transactionsArray.push(req.body)
  res.json(transactionsArray.at(-1))
})

// show one transaction with Index
transactions.get("/:index", (req, res) => {
  const { index } = req.params
  if (transactionsArray[index]) {
    res.status(200).json(transactionsArray[index])
  } else {
    res.status(404).json({ error: "Transaction Not Found" }).redirect("/")
  }
})

// Delete a transactions
transactions.delete("/:index", (req, res) => {
  const deleteTransaction = transactionsArray.splice(req.params.index, 1)
  res.status(200).json(deleteTransaction)
})

// Update transactions
transactions.put("/:index", (req, res) => {
  const { index } = req.params
  if (transactionsArray[index]) {
    transactionsArray[index] = req.body
    res.status(200).json(transactionsArray[index])
  } else {
    res.status(404).json({ message: "Transaction Not Found" }).redirect("/")
  }
})

module.exports = transactions
