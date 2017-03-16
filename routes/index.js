var express = require('express')

var db = require('../db')

module.exports = {
  get: get
}

function get (req, res) {

      res.render("index.hbs")
    // .catch(function (err) {
    //   res.status(500).send('DATABASE ERROR: ' + err.message)
    // })
}

// function home (req, res){
//   var marketString = fs.readFileSync('./routes/seller.txt').toString()
//   var marketData = JSON.parse(marketString)
//   res.render('index', {
//     marketData: marketData
//   })
// }
