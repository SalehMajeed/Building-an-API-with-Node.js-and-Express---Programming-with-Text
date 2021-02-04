const { json } = require('body-parser');
const { request, response } = require('express');
const fs = require('fs');
const dictionary = JSON.parse(fs.readFileSync('dictionary.json'));

function cb(request, response) {
	const data = request.params;
	response.send(`you searched for ${data.data}`);
}

function listening() {
	console.log('done');
}

function add_word(request, response) {
	if (!request.params.score) {
		request.params.score = 0;
	}
	dictionary[request.params.word] = +request.params.score;
	fs.writeFile('dictionary.json', JSON.stringify(dictionary), done_write);
	response.send(dictionary);
}

function done_write(err) {
	console.log('written into the file');
}
function search(request, response) {
	if (request.params.word in dictionary) {
		response.send(`${request.params.word} exist.`);
	} else {
		response.send('not exist.');
	}
}

module.exports = { cb, listening, add_word, search };
