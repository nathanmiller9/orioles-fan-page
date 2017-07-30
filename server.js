var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var promisify = require('es6-promisify');

var app = express();
// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'topsecret',
  saveUninitialized: true,
  resave: true
}));

// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



// Routes
app.get('/cChatResult2', function (req, res) {
   console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");
  // Making a request call for reddit's "CryptoCurrency" board. The page's HTML is saved as the callback's third argument
  request("https://www.reddit.com/r/CryptoCurrency", function(error, response, html) {
    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var result = [];
    // With cheerio, find each p-tag with the "title" class
    // (i: iterator. element: the current element)
    $("p.title").each(function(i, element) {
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

app.get('*', function (req, res) {
  res.sendFile('index.html');
});
// Set Port
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});