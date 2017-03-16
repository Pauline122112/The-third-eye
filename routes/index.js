var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  getForm: getForm
}

function get (req, res) {

      res.render("index.hbs")
}

function getForm (req, res) {

  res.render("sellerForm.hbs")
}
