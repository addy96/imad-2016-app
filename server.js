var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ledzep = {
  led1 : {    title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
},
  led2 :{ title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
 },    
  led3  : { title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
  },
  led4 :{ title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
  },
  led5  : { title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
  },
  led6  : { title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
  },
  led7  : { title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
  },
  led8  :{  title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>}'
   },
  led9  : { title:'LedZep | Addy',
    heading:'Stairway to Heaven',
    date:'sep 25,2016',
    content:'<p>Dazed And Confused </p>'
 }
};

function createTemplate (data) {
    
var title = data.title;
var heading = data.heading;
var date = data.date;

var content = data.content;

var htmlTemplate = `<html>
<head>
    
    <link href="/ui/new.css" rel="stylesheet" />
    <title>
            ${title}
    </title>
    <meta name="viewport" content="width=devide-width,initial-scale=1"/>
    <link href="/ui/new.css" rel="stylesheet" />
</head>
<body>
        <div class="container">
         <a href="/">Home</a>
    </div>
    <hr/>
    <h1>About Lez Zepellin</h1>
    <h2>${heading}</h2>
    <div>${date}</div>
    <div>
    ${content}
    </div>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/Go.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Go.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/new.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'new.css'));
});
app.get('/ui/second.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'second.css'));
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
app.get('/ui/led1.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'led1.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
