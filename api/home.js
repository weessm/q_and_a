module.exports = app => {

    const homepage = (req, res) => {
        try {
            res.render('../src/views/home')
        } catch (msg) {
            console.log(msg)
            return res.status(400).send(msg)
        }
    }

    return { homepage }
}