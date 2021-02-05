function setup() {
	const add = select('#submit');
	add.mousePressed(submit_score);

	const analyze = select('#analyze');
	analyze.mousePressed(analyze_score);
}

function submit_score() {
	const input_word = select('#word').value();
	const input_score = select('#score').value();

	loadJSON(`/add/${input_word}/${input_score}`, finished);
}

function analyze_score() {
	const text = select('#txt').value();
	httpPost('analyze/', { text }, 'json', data_post, data_error);
	console.log(text);
}

function data_post(result) {
	console.log(result);
}

function data_error(err) {
	console.log(err);
}

function finished(data) {
	console.log(data);
}
