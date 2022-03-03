// Listen for submit

	// Hide Results
	// Show Loader

// CalcResult
	// UI Vars
	const amount 
	const interest 
	const years 
	const monthlyPayment 
	const totalPayment 
	const totalInterest 

	const principal = parseFloat(amount.value);
	const calcInterest = parseFloat(interest.value) / 100 / 12;
	const calcPayment = parseFloat(years.value) * 12;

	// Compute monthly payment
	const x = Math.pow(1 + calcInterest, calcPayment);
	const monthly = (principal * x * calcInterest) / (x - 1);
	// isFinite - 매개변수가 유한한 수
	// <> isNaN Method 참고

		// Show Results
	
		// Hide Loader
	
	


// Show Error

	// Show Results
	
	// Hide Loader
	
	// Get Element - card, heading
	
	// Add class
	
	// Create Text Node and Append to div

	// Insert error above heading
	
	// Clear error after 3 sec
	

// clear error
