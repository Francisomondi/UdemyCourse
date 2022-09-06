const express = require("express")
const app = express()

app.use(express.json())

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
app.get("/api/courses", (req, res) => {
    res.send(courses)
})

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) res.status(404).send(`The course with this is was not found`)
    res.send(course)

})

app.post("/api/courses", (req, res) => {

    if (req.body.name || req.body.name.length < 3) {
        return res.status(400).send("Name is required and character should be more than 3")
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }

    courses.push(course)
    res.send(courses)
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app