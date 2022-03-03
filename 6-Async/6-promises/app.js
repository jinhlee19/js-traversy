////// Promises - alternative for callback async in ES6
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			posts.push(post);
			const error = true;
			if (!error) {
				resolve();
			} else {
				reject('Error: Something went wrong.');
			}
		}, 2000);
	});
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

createPost({ title: 'Post Three', body: 'This is post three' })
	.then(getPosts)
	// 이때 catch는 14,15열의 에러를 받기 위함 
	.catch(function (err) {
		console.log(err); 
		// 에러 메세지는 Uncaught (in promise)로 뜸.
	});


// 질문 : err error, resolve, reject 메서드는 예약어? prototype 인가? catch는 error처리 전용인가? ∏∏
// resolve 와 reject는 단순히 promise를 위한 국룰(convention) 단어. 다른이름으로 바꿔도 사용없음 - catch의 err도 마찬가지 

// 지금 나오는 이유는 다음 수업 Fetch API 가 returns promises 하기때문이라고함....
