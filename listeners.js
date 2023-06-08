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

    document.querySelectorAll('#gym-table input[type="checkbox"]:checked')
    .forEach((checkbox) => {
        gymTotal += parseInt(checkbox.value);
    });

    document.querySelectorAll('#trainer-table input[type="checkbox"]:checked')
    .forEach((checkbox) => {
        trainerTotal += parseInt(checkbox.value);
    });

    let total = gymTotal+trainerTotal;
    let amuletCoinTotal = total*1.5-document.getElementById('amulet-coin-in').value;
    let riches75Total =	total*1.75-document.getElementById('riches-75-in').value;
    let riches100Total = total*2.0-document.getElementById('riches-100-in').value;

    let noCharm = document.querySelector('#no-charm');
    let amuletCoin = document.querySelector('#amulet-coin');
    let riches75 = document.querySelector('#riches-75');
    let riches100 = document.querySelector('#riches-100');

    noCharm.textContent = 'No charm: ' + currencyFormat(total);
    amuletCoin.textContent = 'Amulet coin: ' + currencyFormat(amuletCoinTotal);
    riches75.textContent = 'Riches 75%: ' + currencyFormat(riches75Total);
    riches100.textContent = 'Riches 100%: ' + currencyFormat(riches100Total);
};

var elements = document.getElementsByClassName("form-check-input");

for (var i = 0; i < elements.length; i++) {

    elements[i].addEventListener('change', updateTotal, false);

}

document.querySelector('#trainers')
.addEventListener('change', () => {
    updateTotal();
});

document.querySelector('#gyms')
.addEventListener('change', () => {
    updateTotal();
});

document.querySelector('#charm-form')
.addEventListener('input', () => {
    updateTotal();
});
