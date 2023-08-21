function currencyFormat(x) {
    return x.toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};

function updateTotal() {
    let gymTotal = 0;
    let trainerTotal = 0;
<<<<<<< HEAD
    let eliteFourTotal = 0;

=======


>>>>>>> 76654659fdfea1629137d1195d0592962cb9fbe3
    document.querySelectorAll('#gyms input[type="checkbox"]:checked')
    .forEach((checkbox) => {
        gymTotal += parseInt(checkbox.value);
    });

    document.querySelectorAll('#trainers input[type="checkbox"]:checked')
    .forEach((checkbox) => {
        trainerTotal += parseInt(checkbox.value);
    });
    document.querySelectorAll('#elite-four input[type="checkbox"]:checked')
    .forEach((checkbox) => {
        eliteFourTotal += parseInt(checkbox.value);
    });

    let total = gymTotal+trainerTotal+eliteFourTotal;
    let amuletCoinTotal = total*1.5-document.getElementById('amulet-coin-in').value;
    let riches75Total =	total*1.75-document.getElementById('riches-75-in').value;
    let riches100Total = total*2.0-document.getElementById('riches-100-in').value;

    let noCharm = document.querySelector('#no-charm');
    let amuletCoin = document.querySelector('#amulet-coin');
    let riches75 = document.querySelector('#riches-75');
    let riches100 = document.querySelector('#riches-100');

    console.log(total);
    noCharm.textContent = 'No charm: ' + currencyFormat(total);
    amuletCoin.textContent = 'Amulet coin: ' + currencyFormat(amuletCoinTotal);
    riches75.textContent = 'Riches 75%: ' + currencyFormat(riches75Total);
    riches100.textContent = 'Riches 100%: ' + currencyFormat(riches100Total);
};

document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelector('#gyms')
  .addEventListener('change', () => {
      updateTotal();
  });
  document.querySelector('#trainers')
  .addEventListener('change', () => {
      updateTotal();
  });
  document.querySelector('#elite-four')
  .addEventListener('change', () => {
      updateTotal();
  });
  document.querySelector('#charm-form')
  .addEventListener('input', () => {
      updateTotal();
  });
});
