# 1. AJAX & XHR

# 2. XHR Object Methods & Working with Text

```javascript
document.getElementById('button1').addEventListener('click', loadCustormer);
document.getElementById('button2').addEventListener('click', loadCustormers);

//// LOAD CUSTOMER
function loadCustormer(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customer.json', true);
	// true for async
	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);
			// parse as an object
			const customer = JSON.parse(this.responseText);
			const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;
			document.getElementById('customer').innerHTML = output;
		}
	};
	xhr.send();
}

//// LOAD CUSTOMERS
function loadCustormers(e) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'customers.json', true);
	// true for async
	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);
			// parse as an object
			const customers = JSON.parse(this.responseText);
			// Need To Loop Through it!
			let output = '';
			// going to reassign in the loop
			customers.forEach(function (customer) {
				output += `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;
			});

			document.getElementById('customers').innerHTML = output;
		}
	};
	xhr.send();
}
```

## 기본 형식 예제

```javascript
function loadData() {
	// (1)xhr 변수 (2)open (3)onload(statement) (4)send
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.txt', true);
	xhr.onload = function () {
		// console.log('READYSTATE', xhr.readyState);
		if (this.status === 200) {
			document.getElementById('output').innerHTML = `<h6>${this.responseText}</h6>`;
		}
	};
	xhr.onerror = function () {
		console.log('Request error...');
	};
	xhr.send();
}
```

```md
# readyState Values

0: request not initialized
1: server connection established
2: request received
3: processing request -> spinner or loader
4: request finished and response is ready

# HTTP STATUS

200: "OK"
403: "Forbidden"
404: "Not Found"
```

```javascript
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
	// Create an XHR Object
	const xhr = new XMLHttpRequest();
	// OPEN - specify type of request and url
	// call by '.open('type Of Request', )'
	// get request -> read the file or URL and then data
	xhr.open('GET', 'data.txt', true);

	// 1: server connection established
	// Optional - Used for Spinner / Loaders
	xhr.onprogress = function () {
		console.log('READYSTATE', xhr.readyState);
	};
	// Onload
	xhr.onload = function () {
		console.log('READYSTATE', xhr.readyState);
		console.log(this);
		if (this.status === 200) {
			// console.log(this.responseText);
			document.getElementById('output').innerHTML = `<h6>${this.responseText}</h6>`;
		}
	};
	xhr.onerror = function () {
		console.log('Request error...');
	};

	// 사용하지 않으나 statechange를 확인할 수 있다.
	// xhr.onreadystatechange = function(){
	//     console.log('READYSTATE', xhr.readyState);
	//     if(this.status === 200 && this.readyState === 4){
	//         console.log(this.responseText);
	//     }
	// }
	// Fin.
	xhr.send();
	/* 아무튼 ajax랑 XHR이 더 복잡함. fetch가 newer std.*/
}
```

# 3. JavaScript Object Notation (JSON)

### Intro

    - Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
    - "" 로 key, value를 감싼다.

# Data From an External API

https://api.chucknorris.io/

### STEP 1

```javascript
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
```

### STEP 2

```javascript
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
```

# 4. API, REST APIs & HTTP Requests 정리

### API

    - Contract provided by one piece of software to another
    - Application Programming Interface
    - Structured Request and Response

### Rest APIs

    - Architecture style for designing network applications
    - Relies on a stateless, client-server protocol, almost always HTTP
    - Treats server objects as resources that can be created and destroyed
    - Can be used by virtually any programming language
    - All APIs have their own rules and structure.

> API가 메신저면 rest는 http request를 사용하는 메세지포맷이다.

### Main 4

    - get: 명시된 리소스에서 데이터 가져온다
    - post: 특정 리소스 페이지로 데이터를 보낸다.
    - put: 특정 리소스를 업데이트
    - delele: 특정 리소스를 삭제.

---

And Rest...

    - head: same as get but does not return body but header
    - options: returns the supported http method
    - patch: update partial resources. similiar to put

### API Endpoint

...

# 5. Callback Functions

### 과제 전 설명

> simply a function that's passed in as a parameter to another function and then it's ran inside the function body.

So whenever we did a foreach on an array, when we do array foreach and then we pass in function,that's a callback.
Now that particular callback is not a synchronous meaning that it doesn't.
It doesn't or it does stop anything else from happening until it's done.
But it is in fact a callback.

We have synchronous and asynchronous callback.
Another example is set time out, which we've used quite a bit.
That takes in a callback function, which actually is asynchronous.
So things can happen while that's running, if it's asynchronous.

-> async 예제를 위해서 setTimeout을 이용한 테스팅해보기

### STEP 1

```javascript
const posts = [
	{ title: 'Post One', body: 'this is post one' },
	{ title: 'Post Two', body: 'this is post two' },
];

function createPost(post) {
	setTimeout(function () {
		posts.push(post);
	}, 2000);
}

function getPosts() {
	setTimeout(function () {
		let output = '';
		posts.forEach(function (post) {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three.' });

getPosts();
```

- Step 1 - sync는 get이 create보다 선행하기 때문에 이후에 생성된 포스트를 반영하지 않는다.
- Step 2 - async with callback. callback을 사용해서 비동기식으로 실행시킬 수 있다는 듯.

### STEP 2

```javascript
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' },
];
function createPost(post, callback) {
	setTimeout(function () {
		posts.push(post);
		callback();
		// 여기서 아래의 getPosts 콜백함수가 실행되면서 비동기식으로 처리.
	}, 2000);
}

function getPosts() {
	setTimeout(function () {
		let output = '';
		posts.forEach(function (post) {
			output += `<li>${post.title}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
```
