class Book {
	constructor(title, author, isbn) {
		this.title = title, this.author = author, this.isbn = isbn;
	}
}

class UI {
	// Process: methods list -> parameter ->
	addBookToList(book) {
		const list = document.getElementById('book-list');
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href="#" class="delete">X</a></td>
		`;
		list.appendChild(row);
	}
	showAlert(message, className) {
		// Create a Div
		const div = document.createElement('div');
		// Add a Class
		div.className = `alert ${className}`;
		// Add text
		div.appendChild(document.createTextNode(message));
		// Get Parent
		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');
		// Insert alert
		container.insertBefore(div, form);
		// Timeour after 3 sec
		setTimeout(function () {
			document.querySelector('.alert').remove();
		}, 3000);
	}
	deleteBook(target) {
		if (target.className === 'delete') {
			target.parentElement.parentElement.remove();
		}
	}
	clearFields() {
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
}

////// EVENT LISTENERS  --- same as ES5
// EVENT LISTENERS for Add Book
document.getElementById('book-form').addEventListener('submit', function (e) {
	// Get Form Values
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	// Instantiate book Object
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();
	console.log(ui); // 생성된 프로토타입의 메서드 구경하기!
	// Validate
	if (title === '' || author === '' || isbn === '') {
		// Error alert
		ui.showAlert('please fill in all fields', 'error');
	} else {
		// Add book to list
		ui.addBookToList(book);
		// Show success 
		ui.showAlert('Book Added!', 'success')
		// Clear fields
		ui.clearFields();
	}
	e.preventDefault();
});

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e){
	// Instantiate UI AGAIN
	const ui = new UI();
	ui.deleteBook(e.target);
	// Show message 
	ui.showAlert('Book Removed', 'success');

	e.preventDefault();
});
