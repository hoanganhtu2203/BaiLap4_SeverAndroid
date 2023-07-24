var express = require('express');
var app = express();
var expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.get('/', function(req, res){
    res.send('Hello, world')
});
app.get('/index', function(req, res){
    res.render('index',{
        layout: 'main'
    });
})
app.listen(process.env.PORT || '3000');