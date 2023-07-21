const express = require('express')
const app = new express()
const cors = require('cors')
app.use(cors())
/**
 * To allow accessing body data
 */
app.use(express.json())

/**
 * This is routes for users
 */
const userRoutes = require("./routes/userRoutes")
app.use(userRoutes)

// welcom message
app.get("/", (req, res) => {
    res.send("Welcome to the Node.js server!")
})

module.exports = app;