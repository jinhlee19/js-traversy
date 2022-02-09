//////////////////////////////////////////////////////
////// ES 5 Version - using prototype and its methods 

// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

//////////////////////////////////////////////////////
////// PROTOTYPE METHODS

// Add Book to List - UI function의 prototype에 메서드를 생성.
UI.prototype.addBookToList = function (book) {
	const list = document.getElementById('book-list');
	// Create tr Element
	const row = document.createElement('tr');
	// Insert cols
	row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
	list.appendChild(row);
};

// SHOW ALERT
UI.prototype.showAlert = function (message, className) {
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
};

// DELETE BOOK
UI.prototype.deleteBook = function(target){
	if(target.className === 'delete'){
		target.parentElement.parentElement.remove();
	}
}
// CLEAR FIELDS
UI.prototype.clearFields = function () {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

////// EVENT LISTENERS  

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

/* 
If we have something that's going to show up more than once with the same class or something that is not there when the page loads, but it's dynamically added, we're going to have to use event delegation.

*/