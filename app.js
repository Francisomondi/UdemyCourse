const express = require("express")
const app = express()
const logger = require("./logger")
const authenticate = require("./auth")
const helmet = require("helmet")
const morgan = require("morgan")
const coursesRoute = require("./routes/courses")

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static("public"))

app.use(logger)

app.use(authenticate)
app.use(helmet())
app.use(morgan("tiny"))

app.use("./api/courses", coursesRoute)

const courses = [{
        id: 1,
        name: "Chemestry"
    },
    {
        id: 2,
        name: "physics"
    },
    {
        id: 3,
        name: "history"
    }
]

app.get("/", (req, res) => {
    res.send("Hello francis!!!!")
})





const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app