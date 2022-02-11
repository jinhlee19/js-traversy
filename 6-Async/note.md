# XHR

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

## JavaScript Object Notation (JSON)

---

### Intro

- Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷
- "" 로 key, value를 감싼다.
