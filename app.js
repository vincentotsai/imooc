var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages')
app.set('view engine','pug')
app.listen(port)

console.log('Imooc is running on localhost:'+port)
// vscode 

// index page
app.get('/',function(req,res){
    res.render('index',{title:'homepage',message:'welcome imooc!'})
})

// detail page
app.get('/detail',function(req,res){
    res.render('detail',{title:'detail page'})
})

// admin page
app.get('/admin',function(req,res){
    res.render('admin',{title:'admin'})
})

// list page
app.get('/admin/list',function(req,res){
    res.render('list',{title:' list page'})
})