const dictionary = {};

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
	response.send(dictionary);
}

function search(request, response) {
	if (request.params.word in dictionary) {
		response.send(`${request.params.word} exist.`);
	} else {
		response.send('not exist.');
	}
}

module.exports = { cb, listening, add_word, search };
