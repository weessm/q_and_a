module.exports = app => {

    const makeQuestion = (req, res) => {
        try {
            res.render('../src/views/question')
        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }
    }

    return { makeQuestion }
}