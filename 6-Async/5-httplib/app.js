const http = new easyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
	// console.log(err, posts);
	if (err) {
		console.log(err);
	} else {
		console.log(posts);
	}
});
