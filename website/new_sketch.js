var table;
const afinn = {};

function preload() {
	table = loadTable('./AFINN/AFINN-111.txt', 'tsv');
}

function setup() {
	noCanvas();
	console.log(table);
	for (let i = 0; i < table.getRowCount(); i++) {
		const row = table.getRow(i);
		afinn[row.get(0)] = +row.get(1);
	}
	console.log(afinn);
	save(afinn, 'afinn111.json');
}
