class Order {
	constructor(company, className, bookName, eachPrice, orderNumber) {
		this.company = company;
		this.className = className;
		this.bookName = bookName;
		this.eachPrice = eachPrice;
		this.orderNumber = orderNumber;
	}
}

class UI {
	addOrderToList(item) {
		const orderList = document.getElementById('order-list');
		const row = document.createElement('tr');
		row.innerHTML = `
        <td>${item.company}</td>
        <td>${item.className}</td>
        <td>${item.bookName}</td>
        <td>${item.eachPrice}</td>
        <td>${item.orderNumber}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
		orderList.appendChild(row);
	}
	deleteOrder(item) {
		if (item.className === 'delete') {
			item.parentElement.parentElement.remove();
		}
	}
	clearField() {
		document.getElementById('company').value = '';
		document.getElementById('class-name').value = '';
		document.getElementById('book-name').value = '';
		document.getElementById('each-price').value = '';
		document.getElementById('order-number').value = '';
	}
	showAlert(message, className) {
		// div만들기, div클래스주기, div에 텍스트노드 추가, 컨테이너와 form의 selector 변수 선언, insert하기
		const div = document.createElement('div');
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));
		const container = document.querySelector('.container');
		const form = document.querySelector('#calc-form');
		container.insertBefore(div, form);
		setTimeout(function () {
			document.querySelector('.alert').remove();
		}, 1500);
	}
}

document.getElementById('calc-form').addEventListener('submit', function (e) {
	const company = document.getElementById('company').value,
		className = document.getElementById('class-name').value,
		bookName = document.getElementById('book-name').value,
		eachPrice = document.getElementById('each-price').value,
		orderNumber = document.getElementById('order-number').value;
	const order = new Order(company, className, bookName, eachPrice, orderNumber);
	const ui = new UI();
	if (company === '' || bookName === '' || eachPrice === '' || orderNumber === '') {
		ui.showAlert('빈칸을 입력해주세요.','error');
	} else {
		ui.addOrderToList(order);
		ui.clearField();
		ui.showAlert('주문이 추가되었습니다.', 'success');
	}
	console.log(ui);

	e.preventDefault();
});

document.getElementById('order-list').addEventListener('click', function (e) {
	const ui = new UI();
	ui.deleteOrder(e.target);
	console.log(e);
	e.preventDefault();
});
