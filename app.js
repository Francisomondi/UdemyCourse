const express = require("express")


const app = express()

app.get("/", (req, res) => {
    res.send("Hello francis!!!!")
})
app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3, 4, 5, 6])
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app