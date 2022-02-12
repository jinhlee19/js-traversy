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

/* 
1. sync 
get이 create보다 선행하기 때문에 이후에 생성된 포스트를 반영하지 않는다.

*/ 