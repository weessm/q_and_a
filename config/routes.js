module.exports = app => {

    app.route('/')
        .get(app.api.home.homepage)

    app.route('/question')
        .get(app.api.question.makeQuestion)

    app.route('/savequestion')
        .post(app.api.question.saveQuestion)

}