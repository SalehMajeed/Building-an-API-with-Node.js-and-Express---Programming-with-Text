const express = require('express');

const app = express();
const server = app.listen(3000, listening);

function listening() {
	console.log('done');
}

app.use(express.static('website'));

app.get('/search/:data', cb);

function cb(request, response) {
	const data = request.params;
	response.send(`you searched for ${data.data}`);
}
