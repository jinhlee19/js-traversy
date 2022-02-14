document.getElementById('button1').addEventListener('click', loadCustormer);
document.getElementById('button2').addEventListener('click', loadCustormers);

//// LOAD CUSTOMER
function loadCustormer(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customer.json', true);
	// true for async
	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);
			// parse as an object
			const customer = JSON.parse(this.responseText);
			const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;
			document.getElementById('customer').innerHTML = output;
		}
	};
	xhr.send();
}

//// LOAD CUSTOMERS
function loadCustormers(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customers.json', true);
	// true for async
	xhr.onload = function () {
		if (this.status === 200) {
			console.log(this.responseText);
			// parse as an object
			const customers = JSON.parse(this.responseText);
			// Need To Loop Through it!
			let output = '';
			// going to reassign in the loop
			customers.forEach(function (customer) {
				output += `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;
			});

			document.getElementById('customers').innerHTML = output;
		}
	};
	xhr.send();
}
