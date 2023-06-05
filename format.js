import { GYMS, TRAINERS } from "./data.js";

const gymDiv = document.querySelector('#gyms');

let gymRegions = [];
GYMS.forEach(gym =>{
  if(!gymRegions.includes(gym.region)){
    gymRegions.push(gym.region);

    let gymHeader = document.createElement("h3");
    gymHeader.innerHTML=gym.region;

    let gymTable = document.createElement("table");
    gymTable.setAttribute("id",gym.region.toLowerCase()+"-gyms")
    gymTable.classList.add("table","table-sm","gym-table")
    gymTable.innerHTML="<tr><th></th><th>City</th><th>Leader</th><th>Base Profit</th></tr>";

    gymDiv.appendChild(gymHeader);
    gymDiv.appendChild(gymTable);
  }
})
console.log(gymRegions)


const trainerDiv = document.querySelector('#trainers');

let trainerRegions = [];
TRAINERS.forEach(trainer =>{
  if(!trainerRegions.includes(trainer.region)){
    trainerRegions.push(trainer.region);

    let trainerHeader = document.createElement("h3");
    trainerHeader.innerHTML=trainer.region;

    let trainerTable = document.createElement("table");
    trainerTable.setAttribute("id",trainer.region.toLowerCase()+"-trainers")
    trainerTable.classList.add("table","table-sm","trainer-table")
    trainerTable.innerHTML="<tr><th></th><th>Region</th><th>Trainer</th><th>Base Profit</th></tr>";

    trainerDiv.appendChild(trainerHeader);
    trainerDiv.appendChild(trainerTable);
  }
})
console.log(gymRegions)


GYMS.forEach(gym => {
    let gymTable = document.querySelector('#'+gym.region.toLowerCase()+'-gyms');
    let row = gymTable.insertRow();
    let check_cell = row.insertCell();
    let check_input = document.createElement("input");
    check_input.type = "checkbox";
    check_input.name = gym.name;
    check_input.value = gym.profit;
    check_input.classList.add("form-check-input");

    delete gym.region;
    check_cell.appendChild(check_input);
    Object.keys(gym).forEach((k, i) => {
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
    check_input.name = trainer.name;
    check_input.value = trainer.profit;
    check_input.classList.add("form-check-input");

    delete trainer.region;
    check_cell.appendChild(check_input);
    Object.keys(trainer).forEach((k, i) => {
        let cell = row.insertCell();
        let text = document.createTextNode(trainer[k]);
        cell.appendChild(text);
    });
});




//get all unique regions in a table
