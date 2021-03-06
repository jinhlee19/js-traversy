// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

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

// CLEAR FIELDS
UI.prototype.clearFields = function (){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// EVENT LISTENERS
document.getElementById('book-form').addEventListener('submit', function (e) {
	// Get Form Values
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	// Instantiate book Object
	const book = new Book(title, author, isbn);

	// Instantiate UI
	const ui = new UI();

	// Add book to list
	ui.addBookToList(book);

	// console.log(ui);
	// console.log(book); // Book {title: 'a', author: 'b', isbn: 'c'}

    // Clear Fields
    ui.clearFields();

	e.preventDefault();
});
