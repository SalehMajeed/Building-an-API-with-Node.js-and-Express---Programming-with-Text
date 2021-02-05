const modules = require('./functions_module2');
const body_parser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

app.listen(3000, modules.listening);

app.use(express.static('public'));
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(cors());

app.get('/add/:word/:score?', modules.add_word);

app.post('/analyze', modules.analyze_data);
