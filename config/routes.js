module.exports = app => {

    app.route('/')
        .get(app.api.question.homepage)

    app.route('/question')
        .get(app.api.question.makeQuestion)

    app.route('/savequestion')
        .post(app.api.question.saveQuestion)

    app.route('/question/:id')
        .get(app.api.question.answer)

}