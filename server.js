var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    title:'Deathly Hallows | Addy',
    heading::'deathly hallows',
    date:'sep 25,2016',
    content:''
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/go.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Go.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/new.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'new.css'));
});

app.get('/ui/harry.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'harry.png'));
});

app.get('/ui/Physical Graffiti.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Physical Graffiti.jpg'));
});
app.get('/ui/Go.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Go.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
