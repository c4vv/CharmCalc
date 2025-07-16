class Item {
	constructor(name,id,bp){
		this.name = name;
		this.id = id;
	}
}

const items = [
	new Item("Amulet Coin", "5223"),
	new Item("Riches Charm 75%", "1412"),
	new Item("Riches Charm 100%", "1413"),
];



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

	let donator = ((document.getElementById("donator").checked) ? 1.05 : 1)

	let total = (gymTotal+trainerTotal+eliteFourTotal)*donator;
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

function updateGymCount() {// Get the parent element
    var section = document.getElementById('gyms');
    var checkboxes = section.querySelectorAll('input[type="checkbox"]');
    var headingBeforeSection = section.previousElementSibling;


		var checkedCount = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

		if(checkedCount==0) {
			headingBeforeSection.textContent = "Gyms";
		} else {
			headingBeforeSection.textContent = "Gyms [" + checkedCount + "]";
		}
}
function updateEliteFourCount() {
	var section = document.getElementById('elite-four');
	var checkboxes = section.querySelectorAll('input[type="checkbox"]');
	var headingBeforeSection = section.previousElementSibling;


	var checkedCount = 0;
	checkboxes.forEach(function(checkbox) {
			if (checkbox.checked) {
					checkedCount++;
			}
	});

	if(checkedCount==0) {
		headingBeforeSection.textContent = "Elite Four";
	} else {
		headingBeforeSection.textContent = "Elite Four [" + checkedCount + "]";
	}

}
function updateTrainerCount() {
	var section = document.getElementById('trainers');
	var checkboxes = section.querySelectorAll('input[type="checkbox"]');
	var headingBeforeSection = section.previousElementSibling;


	var checkedCount = 0;
	checkboxes.forEach(function(checkbox) {
			if (checkbox.checked) {
					checkedCount++;
			}
	});

	if(checkedCount==0) {
		headingBeforeSection.textContent = "Trainers";
	} else {
		headingBeforeSection.textContent = "Trainers [" + checkedCount + "]";
	}
}
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
	})
	if(checkedBoxes.length!=0){
		updateTotal();
		updateGymCount();
		updateTrainerCount();
		updateEliteFourCount();
	}

	document.querySelector('#gyms')
	.addEventListener('change', () => {
		updateTotal();
		updateGymCount();
	});
	document.querySelector('#trainers')
	.addEventListener('change', () => {
		updateTotal();
		updateTrainerCount();
	});
	document.querySelector('#elite-four')
	.addEventListener('change', () => {
		updateTotal();
		updateEliteFourCount();
	});
	document.querySelector('#charm-form')
	.addEventListener('input', () => {
		updateTotal();
	});

	getItemPrices(items);
	//5223 - amulet coin
	//1412 - riches charm 75%
	//1413 - riches charm 100%

});

function textToLink() {
	document.querySelector("#link").value = createURL();
}

function createURL() {
	const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
	let checkedBoxIDs = [];
	checkedBoxes.forEach((k,i)=> {
		checkedBoxIDs.push(k.id);
	});

	let idstring = checkedBoxIDs.join(",");
	idstring = idstring.replace("donator,","");
	idstring = idstring.replace("donator","");

	console.log(idstring);
	let s = window.location.origin+window.location.pathname+"?vals="+idstring;

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

function getItemPrices(items){
	let itemsWithPrices = [];

	fetch('https://pokemmoprices.com/api/v2/items/table')
	  .then(response => {
	    if (!response.ok) {
	      throw new Error('Network response was not ok');
	    }
	    return response.json(); // Parse the JSON response
	  })
	  .then(data => {
	    //console.log('Data received:', data);
			// item.price = priceLessGTLFee(data.data.pop().y);
			for (let item of items) {
				let searchId = item.id;
				let foundItem = null;
				let itemPriceArray = data.data;
				//console.log(itemPriceArray)
				for (let j = 0; j < itemPriceArray.length; j++) {
				  if (itemPriceArray[j].i == searchId) {
				    foundItem = itemPriceArray[j];
				    break;
				  }
				}
				if (foundItem) {
				  //console.log(foundItem);
					let price = foundItem.p;
					item.price = price;
					//console.log(item);
					itemsWithPrices.push(item);
				} else {
				  console.log('Object not found');
				}

			}

				if (itemsWithPrices.length === items.length) {
					document.getElementById('amulet-coin-in').value = itemsWithPrices.find(item => item.id === "5223")?.price;
					document.getElementById('riches-75-in').value = itemsWithPrices.find(item => item.id === "1412")?.price;
					document.getElementById('riches-100-in').value = itemsWithPrices.find(item => item.id === "1413")?.price;
				}
	  })
	  .catch(error => {
	    console.error('There was a problem with the fetch operation:', error);
	  });
}
