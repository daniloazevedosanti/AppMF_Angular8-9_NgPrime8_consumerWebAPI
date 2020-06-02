//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/AppMF'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/AppMF/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

/*const express = require('express');
const path = require('path');
const AppMF = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`${__dirname}/dist/${AppMF}`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${AppMF}/index.html`));
});
 
app.listen(process.env.PORT || 8080);*/