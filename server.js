var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var ledzep = {
  led1 : {    title:'  About Led Zeppelin I',
    heading:'First Album',
    date:'1969',
    content:`<p>You can hardly tell now, but at the time of Led Zeppelin’s debut album, released on January 12, 1969, nobody expected this. This was a group of misfits and underdogged musicians who jobbed around the UK separately before getting together. They broke through the walls of critics and went straight for the audience – and won. Their incorporation of blues, garage rock, soul, shuffle, psychedelic classical, rock, and playing guitars with a violin bow, fer chrissakes, they were over-the-top and minimalist, sometimes in the same song. With songs about hobbits, mythology and sex in equal form, Led Zeppelin made it all look so easy. Until you tried to play one of their songs. Here’s where it all started, with 20 fun facts about not just one of the greatest debut records in music, but one of the best, period.
1. The critics hated this record, but they finally came around. In 2003, the album was ranked #29 on Rolling Stone magazine’s list of the 500 greatest albums of all time, and in 2004, the album was inducted into the Grammy Hall of Fame.
2. Led Zeppelin came together in a strange way. In August 1968, The Yardbirds had completely disbanded, but guitarist Jimmy Page, band’s sole remaining member, was left with rights to the group’s name and contractual obligations for a series of concerts in Scandinavia. For his new band, Jimmy asked singer Terry Reid to join the band, but when he said no, Jimmy recruited bassist John Paul Jones, vocalist Robert Plant and drummer John Bonham who were all pretty much untried at the time.
3. During September 1968, The New Yardbirds (yes, that was their name, rather than the new version of The Yardbirds…you know what I mean) toured Scandinavia as The New Yardbirds, performing some old Yardbirds material as well as new songs such as “Communication Breakdown”, “I Can’t Quit You Baby”, “You Shook Me”, “Babe I’m Gonna Leave You”, and “How Many More Times.” There were also plenty of riffs left over from the band Jimmy would use for their debut.
4. The month after they returned to England, October 1968, Page changed the band’s name to Led Zeppelin, and the group entered London’s Olympic Studios to record their debut album, with the 5 songs above road-tested and ready to be recorded.
5. Jimmy said that the album took only about 36 hours of studio time (over a span of a few weeks) to create (including mixing) the entire record. How did he know this? He was the one who paid the studio bill. Because the band didn’t have a record label at that time, there was nobody watching the clock, asking “Where’s the single?” and generally nitpicking over the release. It was the band alone making all the decisions.
6. That studio bill? £1,782, or roughly $3,500 US. The album went on to gross more than $7 million, about 2,000 times more than they invested.
7. Up until the late 1960s, most music producers placed microphones directly in front of the amplifiers and drums. For Led Zeppelin, Jimmy developed the idea of placing an additional microphone some distance from the amplifier (as far as twenty feet) and then recording the balance between the two. By adopting this “distance equals depth” technique, Page became one of the first producers to record a band’s “ambient sound”: the distance of a note’s time-lag from one end of the room to the other.
8. Led Zeppelin I was one of the first albums to be released in stereo-only form; at the time, the practice of releasing both mono and stereo versions was the norm.
9. Led Zeppelin’s front cover, which was chosen by Jimmy, features a black-and-white image of the burning Hindenburg airship. The image refers to the origin of the band’s name itself: when Jimmy, Jeff Beck and The Who’s Keith Moon and John Entwistle were discussing the idea of forming a group, Keith joked, “It would probably go over like a lead balloon”, and Entwistle allegedly replied, “…a lead zeppelin!” And that’s how the name stuck, too.
10. The album’s back cover features a photograph of the band taken by former-Yardbird Chris Dreja. Chris would go on to play in the Yardbirds spin-off band Box of Frogs in the 1980s, and has been part of the Yardbirds’ reformation since 1992.
11. Many of Led Zeppelin’s earliest songs were based on blues standards, and the album also included three songs composed by others: “You Shook Me” and “I Can’t Quit You Baby”, both by blues artist Willie Dixon, and “Babe I’m Gonna Leave You”. Jimmy thought the latter song was a traditional folk tune in the public domain, but he gave credit on subsequent re-release after it was revealed that the song was composed by Anne Bredon in the 1950s.
12. Lead singer Robert Plant was involved with some of the actual songwriting but wasn’t given credit because, the rumour goes, of unexpired contractual obligations resulting from his association with CBS Records. A few Zep books have disputed this, though.
13. For the opener, “Good Times Bad Times”, Jimmy’s passed his Fender Telecaster guitar through a Leslie speaker to create a swirling effect during the guitar solo.
14. Jimmy played “Babe I’m Gonna Leave You” to Robert at their first meeting together, at Jimmy’s riverside home at Pangbourne in late July 1968. Robert still sings the song with his various bands since Zeppelin broke up.
15. When the band played “Dazed And Confused” live, you never knew how long it would last. Some versions began at 6 minutes, but on their 1975 tour, they lasted up to 45 minutes long. The original writer Jake Holmes also composed the US Army recruitment jingle “Be All That You Can Be” in the late 1970s. He also co-wrote the famous “Be a Pepper” for Dr Pepper.
16. “Your Time Is Gonna Come” kicks off side 2, and contains a bit of trickery from Jimmy. He played an out-of-tune Fender 10-string steel guitar, and meant it, maaan.
17, “Communication Breakdown” is one of the few songs on which Jimmy sang a backing vocal, and it’s the only song to be played during every year that the band toured. It usually either opened shows or was played as an encore.
18. “I Can’t Quit You Baby” contains a break during the guitar solo where Jimmy plays a four-bar unaccompanied set-up before relaunching into the solo. Although missing the turnaround coming out of the solo, he tears right back into the song. When he’s asked about this, Jimmy is pretty coy about a mistake being made and kept on the record.
19. Though listed at a time of 3:30 on the album sleeve, “How Many More Times” length of the track is actually 8:28. The incorrect listing was deliberate as it was intended to help promote radio play, as the group knew no radio stations would even think of playing a track that long.
20. Within 2 months of its release the album had reached Billboard Top 10. It stayed on the Billboard chart for 73 weeks and held a 79-week run on the British charts.
</p>`
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
    
    <link href="/ui/second.css" rel="stylesheet" />
    <title>
            ${title}
    </title>
    <meta name="viewport" content="width=devide-width,initial-scale=1"/>
    <link href="/ui/second.css" rel="stylesheet" />
</head>
<body>
        <div class="button">
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
var names=[];
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/Go.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Go.html'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


  var counter=0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
}); 



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/second.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'second.css'));
});



app.get('/ui/:ledName', function (req, res) {
    var ledName = req.params.ledName;
  res.send(createTemplate(ledzep[ledName]));
});


app.get('/ui/new.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'new.css'));
});







var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
