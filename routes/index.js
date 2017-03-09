var express = require('express')

var db = require('../db')

module.exports = {
  get: get
}

function get (req, res) {

      res.send("heloooooo")
    // .catch(function (err) {
    //   res.status(500).send('DATABASE ERROR: ' + err.message)
    // })
}
