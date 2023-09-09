import { GYMS, TRAINERS, ELITEFOUR } from "./data.js";

const gymDiv = document.querySelector('#gyms');

let gymRegions = [];
GYMS.forEach(gym =>{
  if(!gymRegions.includes(gym.region)){
    gymRegions.push(gym.region);

    let gymHeader = document.createElement("h3");
    gymHeader.innerHTML=gym.region;

    let gymTable = document.createElement("table");
    gymTable.setAttribute("id",gym.region.toLowerCase()+"-gyms")
    gymTable.classList.add("table","table-sm","table-fixed","gym-table")
    gymTable.innerHTML="<tr><th></th><th>City</th><th>Leader</th><th>Base Profit</th></tr>";

    gymDiv.appendChild(gymHeader);
    gymDiv.appendChild(gymTable);
  }
})



const trainerDiv = document.querySelector('#trainers');

let trainerRegions = [];
TRAINERS.forEach(trainer =>{
  if(!trainerRegions.includes(trainer.region)){
    trainerRegions.push(trainer.region);

    let trainerHeader = document.createElement("h3");
    trainerHeader.innerHTML=trainer.region;

    let trainerTable = document.createElement("table");
    trainerTable.setAttribute("id",trainer.region.toLowerCase()+"-trainers")
    trainerTable.classList.add("table","table-sm","table-fixed","trainer-table")
    trainerTable.innerHTML="<tr><th></th><th>Region</th><th>Trainer</th><th>Base Profit</th></tr>";

    trainerDiv.appendChild(trainerHeader);
    trainerDiv.appendChild(trainerTable);
  }
})


GYMS.forEach(gym => {
    let gymTable = document.querySelector('#'+gym.region.toLowerCase()+'-gyms');
    let row = gymTable.insertRow();
    let check_cell = row.insertCell();
    let check_input = document.createElement("input");
    check_input.type = "checkbox";
    check_input.id = gym.id;
    check_input.name = gym.name;
    check_input.value = gym.profit;
    check_input.classList.add("form-check-input");

    delete gym.region;
    check_cell.appendChild(check_input);
    Object.keys(gym).filter(v => v != "id").forEach((k, i) => {
        let cell = row.insertCell();
        let text = document.createTextNode(gym[k]);
        cell.appendChild(text);
    });
});


//const trainerTable = document.querySelector('#trainer-table');
TRAINERS.forEach(trainer => {
    let trainerTable = document.querySelector('#'+trainer.region.toLowerCase()+'-trainers');
    let row = trainerTable.insertRow();
    let check_cell = row.insertCell();
    let check_input = document.createElement("input");
    check_input.type = "checkbox";
    check_input.id = trainer.id;
    check_input.name = trainer.name;
    check_input.value = trainer.profit;
    check_input.classList.add("form-check-input");

    delete trainer.region;
    check_cell.appendChild(check_input);
    Object.keys(trainer).filter(v => v != "id").forEach((k, i) => {
        let cell = row.insertCell();
        let text = document.createTextNode(trainer[k]);
        cell.appendChild(text);
    });
});

const eliteFourDiv = document.querySelector('#elite-four');

let eliteFourHeader = document.createElement("h3");
eliteFourHeader.innerHTML="Elite Four";
let eliteFourTable = document.createElement("table");
eliteFourTable.setAttribute("id","elite-four-table")
eliteFourTable.classList.add("table","table-sm","table-fixed","gym-table")
eliteFourTable.innerHTML="<tr><th></th><th>Region</th><th>Base Profit</th></tr>";

//eliteFourDiv.appendChild(eliteFourHeader);
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



//get all unique regions in a table
