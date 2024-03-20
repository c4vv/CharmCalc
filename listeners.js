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
	//5223 - amulet coin

	//1412 - riches charm 75%

	//1413 - riches charm 100%


	fetch('https://pokemmoprices.com/api/v2/items/graph/min/5223/1')
	  .then(response => {
	    if (!response.ok) {
	      throw new Error('Network response was not ok');
	    }
	    return response.json();
	  })
	  .then(data => {
	    // Do something with the fetched data
	    console.log(data);
			const price = data.data.pop().y;
			console.log(price);
			document.getElementById('amulet-coin-in').value=price;
			updateTotal();
	    // Update your webpage with the fetched data
	    // For example:
	    // document.getElementById('someElement').innerText = data.someProperty;
	  })
	  .catch(error => {
	    console.error('There was a problem with your fetch operation:', error);
  });
	fetch('https://pokemmoprices.com/api/v2/items/graph/min/1412/1')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			// Do something with the fetched data
			console.log(data);
			const price = data.data.pop().y;
			console.log(price);
			document.getElementById('riches-75-in').value=price;
			updateTotal();
			// Update your webpage with the fetched data
			// For example:
			// document.getElementById('someElement').innerText = data.someProperty;
		})
		.catch(error => {
			console.error('There was a problem with your fetch operation:', error);
	});
	fetch('https://pokemmoprices.com/api/v2/items/graph/min/1413/1')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			// Do something with the fetched data
			console.log(data);
			const price = data.data.pop().y;
			console.log(price);
			document.getElementById('riches-100-in').value=price;
			updateTotal();
			// Update your webpage with the fetched data
			// For example:
			// document.getElementById('someElement').innerText = data.someProperty;
		})
		.catch(error => {
			console.error('There was a problem with your fetch operation:', error);
	});


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
