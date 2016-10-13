var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ledzep = {
  led1 : {    title:'  About Led Zeppelin I',
    heading:'First Album',
    date:'1969',
    content:`
    
    <p>  Jimmy Page tells Neil McCormick heâs keen to do justice to the archive â with or without Robert Plant


                 I really donât listen to Led Zeppelin that much,â says Jimmy Page, with a twinkle. Iâm not entirely sure I believe him. The rock bandâs image may have been battered in recent years by the strife of plagiarism lawsuits and public bickering between members, but the astonishing brilliance of their original music will always be there â a legacy closely guarded by Page himself. The 72-year-old guitar hero has just overseen the restoration of The Complete BBC Sessions, 33 tracks recorded between 1969 and 1971. The question vexing Page is how he feels listening to his own band from half a century ago. He chews it over for a bit. âI admire their bravado,â he concludes.

 
Looking tanned, long white hair tied back from a wrinkled but lively face, Page has recently returned from Los Angeles, where he appeared in court alongside Zeppelin vocalist Robert Plant. They were defending Stairway to Heaven against accusations of plagiarism brought by the estate of late American guitarist Randy California. On June 23, a jury found that Zeppelin did not copy opening chords from Taurus, a 1967 track by Californiaâs band Spirit. Page canât comment, because an appeal has been launched.

                                                              Jimmy Page
When pressed, he offers some wider thoughts on the ownership of music. ��How would you define Bossa Nova? It was a whole jazz genre and it all starts with the Bossa Nova beat.â Page demonstrates the rhythm on his knee. âThatâs every Bossa Nova record. How far would the Bossa Nova movement have got in a corporate world today? Itâs really disturbing. I do know thereâs a lot of music where Led Zeppelin has been leant on. We didnât do anything about it. And I wouldnât want to, either.â

While Page is proud of Zeppelin, it is not hard to detect a frost in how he refers to other members. âI hadnât seen Robert for a long time. It was nice to say hello,â is the most he will say about his reunion with Plant in court. Page is on record about his frustrations at Plantâs reluctance to continue Zeppelin following a one-off charity reunion in 2007. âRobert would rather play Led Zeppelin with his own band, not with his old band members,â he grumbled in an interview with me in 2014.

The pair last recorded and performed together as Page & Plant for Walking Into Clarksdale in 1998. Since then, Plant has released five original albums and toured constantly. Page has released none and rarely been seen on stage. His focus, Page insists, has been on re-releasing the Zeppelin archive (of which these sessions are the very last). âLed Zeppelin isnât done yet, quite clearly, because every year since 1968 thereâs been new fans. The re-releases have more than doubled the amount of Led Zeppelin work out there. I wanted it done authoritatively, âcause I was the one writing the stuff, I was the producer and mixer. I donât think itâs any more weird than writing your autobiography.â

The BBC Sessions are a reminder of what a fearless and innovative group Zeppelin were. âIt was done with so much freedom and conviction by master musicians, thatâs why it has travelled over time,â says Page. âIt was an extraordinary connection, the synergy within the band. There was an area of ESP between Robert Plant, John Paul Jones, John Bonham and myself.â

Expanded and remastered from the original 1997 release, The Complete BBC Sessions contains eight previously unreleased recordings, including the near mythical Sunshine Woman, which the band concocted on the spot, with multi-instrumentalist Jones hammering out honky-tonky piano.

âIt seemed like fun, making numbers up in the studio,â recalls Page. âThe thing thatâs really apparent is the confidence and attitude. We improvised constantly, the whole thing was moving and transmuting right there, in the moment.â

These recordings showcase the rockers in full, fierce flow. âFor us, every concert, every night, we were trying to break out,â says Page. âIf a song was in the set, it was really going to go through it. It was no longer safe, it was going to be pummelled and changed and new insights put into it.â

For someone of his world beating talent, it has been a very long time since Page has done anything new. His only major live concert appearance this century was the Zeppelin reunion at the 02 Arena. Page can get touchy when pressed on this subject.

âIâm involved in all things musical, itâs all consuming, even if it doesnât necessarily manifest as a record or a concert.â  Perhaps, given his incredible legacy, we should just accept that we have heard the last from Page, although he is insistent it is not the case.

âI set out an agenda for myself before I started to get into the re-releases. I thought I would be playing by now, but certain things got delayed, other things came in the way. So Iâm a little bit behind.â

He insists he still plays behind closed doors. âIf I pick up a guitar, I donât practise scales. I never have. I come up with something I havenât done before, new approaches to chord sequences, riffs, rhythms, so it becomes composition. Itâs not like the music Iâm doing is just a single thread.

Itâs multi-threaded. And the different styles of guitar I can play are multi-faceted.â Then he adds, slightly peevishly, âMaybe I should do scales. Maybe Iâll do some now.â  

Although he remains elusive on the subject, admirers will be pleased that Page genuinely does seem to have something in the pipeline. He vaguely mentions ânew musicâ and his intention to be playing in public again âduring the course of next year.â

He remains tight lipped about what that might be, but at least heâs smiling. âIâm looking forward to putting a project together. I want to surprise people. But whatever I do, I am going to do at my own pace, not at anybody else's.â </p>`
},
  led2 :{ title:'About Lez Zeppelin II',
    heading:'Second Album',
    date:'1969',
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
