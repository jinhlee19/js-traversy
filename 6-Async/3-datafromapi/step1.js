document.querySelector('.get-jokes').addEventListener('click', getJokes);
function getJokes(e) {
	const number = document.getElementById('number').value;
	const xhr = new XMLHttpRequest();
	xhr.open('get', `https://api.icndb.com/jokes/random/${number}`, 'true');
	xhr.onload = function () {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText);
			console.log(response);
		}
	};
	xhr.onerror = function () {
		console.log('Request Error.');
	};
	xhr.send();
	e.preventDefault();
}
