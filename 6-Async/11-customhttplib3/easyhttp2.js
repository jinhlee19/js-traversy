class EasyHTTP {
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	post(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'post',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'put',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	delete(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'delete',
				headers: {
					'content-type': 'application/json',
				},
			})
				.then(res => res.json())
				.then(() => resolve('Resource Deleted'))
				.catch(err => reject(err));
		});
	}
}
