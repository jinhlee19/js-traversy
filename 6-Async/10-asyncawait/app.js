async function myFunc() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Hello'), 2000);
	});
	const error = false;
	if (!error) {
		const res = await promise; 
		return res;
	} else {
		await Promise.reject(new Error('something went wrong'));
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