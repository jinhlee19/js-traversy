// ES5 Object oriented <<LIBRARY>>
// (Next -> Fetch API instead of AJAX XHR, and Use Classes)
function easyHTTP() {
	this.http = new XMLHttpRequest();
}
// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
	this.http.open('GET', url, true);
	let self = this;
	this.http.onload = function () {
		// if(this.http.status ===200){
		// if statement의 this의 scope이 function()으로 처리되서
		// 외부 scope의 this를 변수 선언을 통해서 받아와줘야한다.
		// + arrow function으로는 가능. (lexical this)
		if (self.http.status === 200) {
			// 비동기식으로 처리해줘야하는 부분이므로... callback 섹션 참고*
			// return self.http.responseText;
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	};
	this.http.send();
};

// Make an HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
	this.http.open('POST', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');
	// stringify and pass in data
	let self = this;
	this.http.onload = function () {
		callback(null, self.http.responseText);
	};
	this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request
easyHTTP.prototype.put = function (url, data, callback) {
	this.http.open('put', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');
	let self = this;
	this.http.onload = function () {
		callback(null, self.http.responseText);
	};
	this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE request

easyHTTP.prototype.delete = function (url, callback) {
	this.http.open('delete', url, true);
	let self = this;
	this.http.onload = function () {
		if (self.http.statis === 200) {
			callback(null, 'post');
		} else {
			callback('Error: ' + self.http.status);
		}
	};
	this.http.send();
};
