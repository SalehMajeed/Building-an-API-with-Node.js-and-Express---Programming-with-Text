var afinn;
var total_score = 0;

function preload() {
	afinn = loadJSON('afinn111.json');
}

function setup() {
	const txt = select('#txt');
	txt.input(typing);
}

function typing() {
	const words = txt.value.split(/\W/);
	const score_words = [];
	for (let i = 0; i < words.length; i++) {
		const word = words[i].toLowerCase();
		if (word in afinn) {
			const score = +afinn[word];
			total_score += +score;
			score_words.push(word + ':' + score + ' ');
		}
	}
	const score_board = select('#scores');
	score_board.html('score: ' + total_score);

	const comp = select('#comparative');
	comp.html('comparative: ' + total_score / words.length);

	const wordlist = select('#wordlist');
	wordlist.html(score_words);
}
