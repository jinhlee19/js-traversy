/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Rafy
 * @license MIT
 *
 **/

class EasyHTTP {
	// Make an HTTP GET Request
	get(url) {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}
	// Make an HTTP POST Request
	post(url, data) {
		// post has to take in data as param
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

    // Make an HTTP PUT Request
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
    
    // Make an HTTP DELETE Request
    delete(url, data) {
		
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'delete',
				headers: {
					'content-type': 'application/json',
				},
				// body: JSON.stringify(data), 지우기: data를 보내지 않음. 
			})
				.then(res => res.json())
				.then(() => resolve('Resource Deleted')) // data 삭제 empty()
				.catch(err => reject(err));
		});
	}
}
