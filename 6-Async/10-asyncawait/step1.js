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
