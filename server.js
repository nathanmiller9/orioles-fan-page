var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
var cookieParser = require('cookie-parser');

var app = express();
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Global Vars
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Routes
app.get('/cChatResult2', function (req, res) {
   console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");
  // Making a request call for reddit's "CryptoCurrency" board. The page's HTML is saved as the callback's third argument
  request("https://www.camdenchat.com/", function(error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var result = [];
    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("h2.c-entry-box--compact__title").each(function(i, element) {
      // Save the text of the element (this) in a "title" variable
      var title = $(this).text();
      // In the currently selected element, look at its child elements (i.e., its a-tags),
      // then save the values for any "href" attributes that the child elements may have
      var link = $(this).children('a').attr("href");
      console.log("console logging this", $(this).children('a').attr("href"));

      // Save these results in an object that we'll push into the result array we defined earlier
      result.push({
        title: title,
        link: link
      });
    });
    res.send(result);
  });
});

app.get('/bsun', function (req, res) {
   console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from baltimore sun's orioles blog:" +
            "\n***********************************\n");
  // Making a request call for reddit's "CryptoCurrency" board. The page's HTML is saved as the callback's third argument
  request("http://www.baltimoresun.com/sports/orioles/blog/", function(error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var bsun = [];
    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("div.trb_blogroll_post").each(function(i, element) {
      // Save the text of the element (this) in a "title" variable
      var title = $(this).children('div').attr('data-sc-ti');
      console.log("title", $(this).children('div').attr('data-sc-ti'));
      // In the currently selected element, look at its child elements (i.e., its a-tags),
      // then save the values for any "href" attributes that the child elements may have
      var link = $(this).children('div').attr('data-sc-url');
      console.log("console logging this", $(this).children('div').attr('data-sc-url'));

      // Save these results in an object that we'll push into the result array we defined earlier
      bsun.push({
        title: title,
        link: link
      });
    });
    res.send(bsun);
  });
});

app.get('/roch', function (req, res) {
   console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from MASN's Roch Kubatko Orioles Coverage:" +
            "\n***********************************\n");
  // Making a request call for reddit's "CryptoCurrency" board. The page's HTML is saved as the callback's third argument
  request("http://www.masnsports.com/school-of-roch/", function(error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var roch = [];
    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("div.post").each(function(i, element) {
      // Save the text of the element (this) in a "title" variable
      var title = $(this).children('h2').children('a').text();
      console.log("title", $(this).children('h2').children('a').text());
      // In the currently selected element, look at its child elements (i.e., its a-tags),
      // then save the values for any "href" attributes that the child elements may have
      var link = $(this).children('h2').children('a').attr('href');
      console.log("console logging this", $(this).children('h2').children('a').attr('href'));

      // Save these results in an object that we'll push into the result array we defined earlier
      roch.push({
        title: title,
        link: link
      });
    });
    res.send(roch);
  });
});

app.get('/melewski', function (req, res) {
   console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from MASN's Steve Melewski Orioles Coverage:" +
            "\n***********************************\n");
  // Making a request call for reddit's "CryptoCurrency" board. The page's HTML is saved as the callback's third argument
  request("http://www.masnsports.com/steve-melewski/", function(error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var melewski = [];
    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("div.post").each(function(i, element) {
      // Save the text of the element (this) in a "title" variable
      var title = $(this).children('h2').children('a').text();
      console.log("title", $(this).children('h2').children('a').text());
      // In the currently selected element, look at its child elements (i.e., its a-tags),
      // then save the values for any "href" attributes that the child elements may have
      var link = $(this).children('h2').children('a').attr('href');
      console.log("console logging this", $(this).children('h2').children('a').attr('href'));

      // Save these results in an object that we'll push into the result array we defined earlier
      melewski.push({
        title: title,
        link: link
      });
    });
    res.send(melewski);
  });
});

app.get('*', function (req, res) {
  res.sendFile('index.html');
});

// Set Port
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});