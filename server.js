var express = require ('express'), 
    http    = require ('http'); 

var app = express();
var httpport = process.env.port || 3005;

var server = app.listen(httpport, function() {
    console.log('Listening on port %d', '|', server.address().port, '|' + typeof(server.address().port));
    console.log('process.env.port', process.env.port);
});

// Serve up content from public directory
app.use('/public', express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


// get request handlers
app.get('/home', function(req, res) {
  res.sendfile(__dirname + '/public/html/index.html');
});
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/html/index.html');
});

app.get('/projects', function(req, res) {
  res.sendfile(__dirname + '/public/html/projects.html');
});

app.get('/blog', function(req, res) {
  res.redirect('http://blog.richardpeng.io');
});

app.get('/google90d438e345506c6a.html', function(req, res){
  res.sendfile(__dirname + '/public/html/google90d438e345506c6a.html');
});