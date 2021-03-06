// Listen for submit
const loanForm = document.getElementById('loan-form');
loanForm.addEventListener('submit', function (e) {
	// Hide Results
	document.getElementById('results').style.display = 'none';

	// Show Loader
	document.getElementById('loading').style.display = 'block';
	setTimeout(calcResult, 2000);
	e.preventDefault();
});

function calcResult(e) {
	console.log('Calculating... ');

	// UI Vars
	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const years = document.getElementById('years');
	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	const principal = parseFloat(amount.value);
	const calcInterest = parseFloat(interest.value) / 100 / 12;
	const calcPayment = parseFloat(years.value) * 12;

	// Compute monthly payment
	const x = Math.pow(1 + calcInterest, calcPayment);
	const monthly = (principal * x * calcInterest) / (x - 1);
	// isFinite - 매개변수가 유한한 수
	// <> isNaN Method 참고
	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calcPayment).toFixed(2);
		totalInterest.value = (monthly * calcPayment - principal).toFixed(2);
		// Show Results
		document.getElementById('results').style.display = 'block';
		// Hide Loader
		document.getElementById('loading').style.display = 'none';
	} else {
		showError('Please Check your numbers');
	}
	e.preventDefault();
	// Show Error
}
function showError(error) {
	// Show Results
	document.getElementById('results').style.display = 'none';
	// Hide Loader
	document.getElementById('loading').style.display = 'none';
	const errorDiv = document.createElement('div');
	// Get Element - card, heading
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');
	// Add class
	errorDiv.className = 'alert alert-danger';
	// Create Text Node and Append to div
	errorDiv.appendChild(document.createTextNode(error));
	// Insert error above heading
	card.insertBefore(errorDiv, heading);
	// Clear error after 3 sec
	setTimeout(clearError, 1000);
}
// clear error
function clearError() {
	document.querySelector('.alert').remove();
}
