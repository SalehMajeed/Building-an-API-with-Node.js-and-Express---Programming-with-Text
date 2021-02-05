const express = require('express');
const modules = require('./functions_module');

const app = express();
const server = app.listen(3000, modules.listening);

app.use(express.static('website'));

app.get('/search/:data', modules.cb);

app.get('/add/:word/:score?', modules.add_word);

app.post('/add/:word', modules.add_word);

app.get('/search%20word/:word', modules.search);

app.get('/all', modules.get_all);

// app.post('/all', modules.get_all); // different route
// if request got changed then all the port would be changed too. oreder matters.
// commonJs
// requireJs
