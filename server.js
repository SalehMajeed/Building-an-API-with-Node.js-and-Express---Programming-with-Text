const express = require('express');

console.log(express)
const app = express();
const server = app.listen(3000, listening);

function listening() {
	console.log('done');
}

app.use(express.static('website'));
