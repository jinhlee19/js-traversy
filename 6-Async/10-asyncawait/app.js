// es7 기능 - 웹팩, 바벨로 컴파일해서 사용

async function myFunc() {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Hello'), 2000);
	});
	const error = true;
	if (!error) {
		const res = await promise; // Wait until Promise is resolves
		return res;
	} else {
		await Promise.reject(new Error('something went wrong'));
	}
}

myFunc().then(res => console.log(res)).catch(err => console.log(err));

async function getUsers() {
    // await response of the fetch call
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // Only Proceed once its resolved
	const data = await response.json();
    // Only proceed once second promise is resolved;
	return data;
    
}

getUsers().then(users => console.log(users));