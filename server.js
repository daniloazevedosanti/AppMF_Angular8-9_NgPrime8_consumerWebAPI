const express = require('express');
const path = require('path');
const AppMF = process.env.npm_package_name;
const app = express();
 
app.use(express.static(`${__dirname}/dist/${AppMF}`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${AppMF}/index.html`));
});
 
app.listen(process.env.PORT || 8080);