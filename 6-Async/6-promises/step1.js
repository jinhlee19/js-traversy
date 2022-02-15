////// Promises - alternative for callback async in ES6
const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' },
];

function createPost(post) {
	// #1 new Promise
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			posts.push(post);
			// #2 callback 대신 resolve();
			resolve();
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
// #3 callback 자리에 getPost -> then(getPost)
createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts);
