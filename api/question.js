module.exports = app => {

    const makeQuestion = (req, res) => {
        try {
            res.render('../src/views/question')
        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }
    }

    const saveQuestion = (req, res) => {
        try {
            let title = req.body.title
            let description = req.body.description
            res.send(`Formulário recebido:<br><br><strong>${title}</strong><br>${description}`)
        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }
    }

    return { makeQuestion, saveQuestion }
}