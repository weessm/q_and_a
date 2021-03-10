const express = require('express')
const cors = require('cors')

module.exports = app => {
    app.set('view engine', 'ejs')
    app.use(express.static('src/public'))
    app.use(express.json())
    app.use(cors())
}