class EasyHTTP {
	async get(url) {
		const response = await fetch(url);
		const resData = await response.json();
		return resData;
	}

	async post(url, data) {
		const response = await fetch(url, {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const resData = await response.json();
		return resData;
	}

	async put(url, data) {
		const response = await fetch(url, {
			method: 'put',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const resData = await response.json();
		return resData;
	}

	async delete(url) {
		const response = await fetch(url, {
			method: 'delete',
			headers: {
				'content-type': 'application/json',
			},
		});
		const resData = await 'Resource deleted...';
		return resData;
	}
}
