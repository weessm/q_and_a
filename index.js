const app = require('express')()
const consign = require('consign')
require('dotenv').config()
const PORT = process.env.PORT || 8081

consign()
    .include("./config/middleware.js")
    .then("./api/validator.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app)

app.listen(PORT, () => {
    console.log(`Online em: http://localhost:${PORT} (づ￣ 3￣)づ`)
})
