const app = require('express')()
const consign = require('consign')
require('dotenv').config()

consign()
    .include("./config/middleware.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app)

app.listen(process.env.PORT || 8081, () => {
    console.log(`Online em: http://localhost:${process.env.PORT} (づ￣ 3￣)づ`)
})