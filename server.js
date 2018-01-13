var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var rest = require('restler')
// var config = require('./config.js')


var lunoRouter = require('./routes/luno.js')

var app = express()

app.use(bodyParser.json()) // Allow JSON to be parsed within a payload.
app.use(bodyParser.urlencoded({ extended: false })) // Allow URL encoded messages to be parsed within a payload.
app.use(bodyParser.text()) // Allow plain text to be parsed within a payload.

app.use(express.static(__dirname + '/views/bootstrap')) // Serve the views folder.
app.use(express.static(__dirname + '/scripts')) // Serve the client side javascript.

app.use(lunoRouter)// Register the page router to express.

// Catch 404 and forward to error handler.
app.use(function (req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

// Create the server.
var server = app.listen(2022, function () {
    console.log('Server listening on port ' + server.address().port)
})

module.exports = app
