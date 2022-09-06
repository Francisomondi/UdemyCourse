const express = require("express")
const app = express()

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
    if (!course) res.status(404).send("course with this id was not found")
    res.send(course)

})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

module.exports = app