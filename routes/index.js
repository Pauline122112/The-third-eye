var express = require('express')

var db = require('../db')

module.exports = {
  get: get
}

function get (req, res) {
  console.log("hellow");
      res.send("heloooooo")
    // .catch(function (err) {
    //   res.status(500).send('DATABASE ERROR: ' + err.message)
    // })
}
