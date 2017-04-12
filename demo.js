var express = require("express")
var app = express()
app.get('/',function(req,res){
  res.send("GET request to the homepage")
})
app.post('/',function(req,res){
  res.send('post this')
})

app.get('/ex',[cb0,cd1],function(req,res,next){

})