var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/work', function (req, res) {
    res.render('work');
});

app.get('/education', function (req, res) {
    res.render('education');
});

app.get('/projects', function (req, res) {
    res.render('projects');
});

app.get('/fancyclock', function (req, res) {
    res.render('fancyclock', { layout: false })
})

app.listen(3000);