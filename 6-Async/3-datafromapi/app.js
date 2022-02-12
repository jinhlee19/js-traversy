document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
	const number = document.getElementById('number').value;

	const xhr = new XMLHttpRequest();

	xhr.open('get', `https://api.icndb.com/jokes/random/${number}`, 'true');

	xhr.onload = function () {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText);
			console.log(response);

			let output = '';
			// document.getElementById('output').innerHTML = `${}`;
			if (response.type === 'success') {
				// loop할때, 확인!!
				// response가 object이므로 array를 홀딩하는 value를 타겟해야한다.
				response.value.forEach(function (joke) {
					output += `<li>${joke.joke}</li>`;
				});
			} else {
				output += '<li>Something went wrong.</li>';
			}
			document.querySelector('.jokes').innerHTML = output;
		}
	};

	xhr.onerror = function () {
		console.log('Request Error.');
	};
	xhr.send();
	e.preventDefault();
}
