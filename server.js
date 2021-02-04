const express = require('express');
const modules = require('./functions_module');

const app = express();
const server = app.listen(3000, modules.listening);

app.use(express.static('website'));

app.get('/search/:data', modules.cb);

app.get('/add/:word/:score?', modules.add_word);

app.get('/search%20word/:word', modules.search);
