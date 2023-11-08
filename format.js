import { GYMS, TRAINERS, ELITEFOUR } from "./data.js";

let regions = [];
function add_sub_table(region, name) {
	let div = document.querySelector(`#${name}s`)
	let header = document.createElement("h3");
	header.innerHTML = region;
	div.appendChild(header);

	let table = document.createElement("table");
	table.setAttribute("id",`${region.toLowerCase()}-${name}s`)
	table.classList.add("table","table-sm","table-fixed",`${name}-table`)
	if(name == "trainer") {
		table.innerHTML="<tr><th></th><th>Region</th><th>Trainer</th><th>Base Profit</th></tr>";
	} else if (name == "gym") {
		table.innerHTML="<tr><th></th><th>City</th><th>Leader</th><th>Base Profit</th></tr>";
	}
	regions.push(name+region);
	div.appendChild(table);
}

function fill_table(unit, name) {
	if(!regions.includes(name+unit.region)){
		add_sub_table(unit.region, name);
	}
	let table = document.querySelector(`#${unit.region.toLowerCase()}-${name}s`);
	let row = table.insertRow();
	let check_cell = row.insertCell();
	let check_input = document.createElement("input");
	check_input.type = "checkbox";
	check_input.id = unit.id;
	check_input.name = unit.name;
	check_input.value = unit.profit;
	check_input.classList.add("form-check-input");
	check_cell.appendChild(check_input);

	delete unit.region;
	Object.keys(unit).filter(v => v != "id").forEach((k, i) => {
		let cell = row.insertCell();
		let text = document.createTextNode(unit[k]);
		cell.appendChild(text);
	});
}

GYMS.forEach(gym => {fill_table(gym, "gym");});
TRAINERS.forEach(trainer => {fill_table(trainer, "trainer");});

const eliteFourDiv = document.querySelector('#elite-four');
let eliteFourTable = document.createElement("table");
eliteFourTable.setAttribute("id","elite-four-table")
eliteFourTable.classList.add("table","table-sm","table-fixed","gym-table")
eliteFourTable.innerHTML="<tr><th></th><th>Region</th><th>Base Profit</th></tr>";
eliteFourDiv.appendChild(eliteFourTable);

ELITEFOUR.forEach(team =>{
	let eliteFourTable = document.querySelector('#elite-four-table');
	let row = eliteFourTable.insertRow();
	let check_cell = row.insertCell();
	let check_input = document.createElement("input");

	check_input.type = "checkbox";

	check_input.id = team.id;
	check_input.name = team.region;
	check_input.value = team.profit;
	check_input.classList.add("form-check-input");

	check_cell.appendChild(check_input);
	Object.keys(team).filter(v => v != "id").forEach((k, i) => {
		let cell = row.insertCell();
		let text = document.createTextNode(team[k]);
		cell.appendChild(text);
	});
});