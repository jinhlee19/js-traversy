const posts = [
	{ title: 'Post One', body: 'This is post one' },
	{ title: 'Post Two', body: 'This is post two' },
];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();

// 1초후 뿌려주기와 2초 후 생성 ( -> 생성이 일어나지 않음.)
// 위는 그 예시, 아래는 callback

function createPost(post, callback) {
	setTimeout(function () {
		posts.push(post);
		callback();
        // 여기서 아래의 getPosts 콜백함수가 실행된다.
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
/*
여기서 createPost가 호출되면 getPosts를 getPosts를 매개변수?로 받는 callback이 실행된다.
*/

/* 
1. sync 
- get이 create보다 선행하기 때문에 이후에 생성된 포스트3을 생성하지 않는다.
2. async with callback
- 결론은 그냥 callback을 사용해서 비동기식으로 실행시킬 수 있다는 듯.
*/