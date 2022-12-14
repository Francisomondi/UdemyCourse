const express = require("express")
const router = express.Router()
const Joi = require("joi")

//courses data
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

//get all courses
router.get("/", (req, res) => {
    res.send(courses)
})

//get single course
router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`The course with this ID was not found`)
    res.send(course)

})

//add course
router.post("/", (req, res) => {

    const {
        error
    } = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})

//update courses
router.put("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`The course with this is was not found`)


    const {
        error
    } = validateCourse(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //update course
    course.name = req.body.name
    //return the updated course
    res.send(courses)

})


//delete request
router.delete("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send(`The course with this is was not found`)

    //delete
    const index = courses.indexOf(course)
    if (index > -1) {

        //splice it
        courses.splice(index, 1);

        //set value to element
        res.send(course)
    }

})

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(course);
}

module.exports = router