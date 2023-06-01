import { GYMS, TRAINERS } from "./data.js";

const gymTable = document.querySelector('#gym-table');
GYMS.forEach(gym => {
    let row = gymTable.insertRow();
    let check_cell = row.insertCell();
    let check_input = document.createElement("input");
    check_input.type = "checkbox";
    check_input.name = gym.name;
    check_input.value = gym.profit;

    check_cell.appendChild(check_input);
    Object.keys(gym).forEach((k, i) => {
        let cell = row.insertCell();
        let text = document.createTextNode(gym[k]);
        cell.appendChild(text);
    });
});

const trainerTable = document.querySelector('#trainer-table');
TRAINERS.forEach(trainer => {
    let row = trainerTable.insertRow();
    let check_cell = row.insertCell();
    let check_input = document.createElement("input");
    check_input.type = "checkbox";
    check_input.name = trainer.name;
    check_input.value = trainer.profit;

    check_cell.appendChild(check_input);
    Object.keys(trainer).forEach((k, i) => {
        let cell = row.insertCell();
        let text = document.createTextNode(trainer[k]);
        cell.appendChild(text);
    });
});
