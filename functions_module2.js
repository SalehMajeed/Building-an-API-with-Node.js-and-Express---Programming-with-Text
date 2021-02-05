const fs = require('fs');
const dictionary = JSON.parse(fs.readFileSync('./dictionary.json', 'utf-8'));
const afinn = JSON.parse(fs.readFileSync('./afinn111.json'));

function listening() {
	console.log('listening from new server');
}

function add_word(request, response) {
	dictionary[request.params.word] = +request.params.score;
	fs.writeFile('./dictionary.json', JSON.stringify(dictionary), 'utf8', finished);
	response.send(dictionary);
}

function finished(err) {
	console.log('file has been written');
}

function analyze_data(request, response) {
	const words = request.body.text.split(/\W+/);
	let total_score = 0;
	const word_list = [];
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].toLowerCase();
		let score = 0;
		let found = false;
		if (words[i] in dictionary) {
			score = +dictionary[words[i]];
			found = true;
		} else if (words[i] in afinn) {
			score = +afinn[words[i]];
			found = true;
		}
		if (found == true) {
			word_list.push({ word: words[i], score: score });
		}
		total_score += score;
	}
	const comp = total_score / words.length;
	const reply = {
		score: total_score,
		comparative: comp,
		words: word_list,
	};
	response.send(reply);
}

module.exports = { listening, add_word, analyze_data };
