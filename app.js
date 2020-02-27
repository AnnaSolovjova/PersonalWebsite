const express =  require('express')
const path = require('path')
const app = express();


app.use(express.static(path.join(__dirname, 'public')));
// For static files that we get through npm use these folders - easy to update versions
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')));
app.use('/css', express.static(path.join(__dirname, 'node_modules', 'font-awesome', 'css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.use('/fonts', express.static(path.join(__dirname, 'node_modules', 'font-awesome', 'fonts')));

//use ejs as templating engine
app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.get('/', function(req, res) {
    res.render('index');
    //res.sendFile();
});

app.get('/about', function(req, res) {
    res.render('about');
    //res.sendFile();
});

app.listen(3000, function(){
    console.log("Listening on the port 3000");
});