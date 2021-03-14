const knex = require("../config/db.js");

module.exports = app => {
    const { existsOrError } = app.api.validator

    const homepage = async (req, res) => {
        try {
            await knex('question').select().orderBy('question_id', 'desc').then(questions => {
                res.render('../src/views/home', { questions })
            })

        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }
    }

    const makeQuestion = (req, res) => {
        try {
            res.render('../src/views/question')
        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }
    }

    const saveQuestion = async (req, res) => {
        try {
            let { question_title, question_description } = req.body

            existsOrError(question_title, "Campo de título não preenchido");
            if (typeof question_description === "string" && !question_description.trim()) {
                question_description = "Sem descrição."
            }

            await knex('question').insert({ question_title, question_description })
            res.redirect('/')

        } catch (msg) {
            console.log(msg)
            return res.status(500).send(msg)
        }
    }

    return { homepage, makeQuestion, saveQuestion }
}