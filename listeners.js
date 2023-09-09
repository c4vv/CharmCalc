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
    let eliteFourTotal = 0;

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

    noCharm.textContent = 'No charm: ' + currencyFormat(total);
    amuletCoin.textContent = 'Amulet coin: ' + currencyFormat(amuletCoinTotal);
    riches75.textContent = 'Riches 75%: ' + currencyFormat(riches75Total);
    riches100.textContent = 'Riches 100%: ' + currencyFormat(riches100Total);

    textToLink();
};

document.addEventListener("DOMContentLoaded", function(event) {
  //load url params
  const valsParam = getParameterByName("vals");
  let vals = [];
  if(valsParam) {
    vals = valsParam.split(",");
    vals.forEach((k,i) => {
      document.getElementById(k).checked=true;
    })
  }

  const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  var checkedBoxIDs = [];
  checkedBoxes.forEach((k,i)=> {
    checkedBoxIDs.push(k.id);
    if (Object.is(checkedBoxes.length - 1, k)) {
        // execute last item logic
        updateTotal();
      }
  })



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

function textToLink() {
    document.querySelector("#link").value = createURL();
}

function createURL() {
  const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  var checkedBoxIDs = [];
  checkedBoxes.forEach((k,i)=> {
    checkedBoxIDs.push(k.id);
  });

  const path = ((window.location.path) ? window.location.path : "/" )
  let s = window.location.origin+path+"?vals="+checkedBoxIDs.join(",");

  return s;
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
