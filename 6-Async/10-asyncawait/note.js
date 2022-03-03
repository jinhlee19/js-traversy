async function myFunc() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Hello'), 2000);
	});
	const error = true;
	if (!error) {
		const res = await promise; 
		// Wait until Promise is resolved  (위의 2sec)
		return res;
	} else {
		await Promise.reject(new Error('something went wrong'))
		;
		// Error 생성자 Constructor 참고 [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error/Error]
	}
}

myFunc().then(res => console.log(res)).catch(err => console.log(err));
// Hello (after 2 sec)

async function getUsers() {
    // await response of the fetch call
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // Only Proceed once its resolved
	const data = await response.json();
    // Only proceed once second promise is resolved;
	return data;
    
}

getUsers().then(users => console.log(users));
// > (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]