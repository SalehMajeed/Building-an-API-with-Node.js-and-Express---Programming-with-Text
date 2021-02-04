function setup() {
	createCanvas(600, 500);
	background(60);
	loadJSON('/all', all_data);
	console.log('run');
	const button = select('#submit');
	button.mousePressed(handle_data);
}

function handle_data() {
	const word = select('#word').value();
	const score = select('#score').value();
	create_text(word);
	loadJSON(`add/${word}/${score}?`, finished);
}

function finished(data) {
	console.log(data);
}

function all_data(data) {
	Object.keys(data).map(each_val => create_text(each_val));
}

function create_text(word) {
	textSize(random(10, 25));
	fill(random(255), random(255), random(255));
	text(word, random(width), random(height));
}
