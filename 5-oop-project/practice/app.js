class AddClass {
	constructor(className, company, ageGroup, book1, price) {
		this.className = className;
		this.company = company;
		this.ageGroup = ageGroup;
		this.book1 = book1;
		this.price = price;
	}
}

class UI {
	addClassToList(newClass) {
		const list = document.getElementById('class-list');
		const row = document.createElement('tr');
		row.innerHTML = `
            <td>${newClass.className}</td>
            <td>${newClass.company}</td>
            <td>${newClass.ageGroup}</td>
            <td>${newClass.book1}</td>
            <td>${newClass.price}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
		list.appendChild(row);
	}
	clearFields() {
		document.getElementById('class-name').value = '';
		document.getElementById('company').value = '';
		document.getElementById('age-group').value = '';
		document.getElementById('book1').value = '';
		document.getElementById('price').value = '';
	}
	deleteClass(target) {
		if (target.className === 'delete') {
			// console.log(target.parentElement.parentElement);
			target.parentElement.parentElement.remove();
		}
	}
	showAlert(message, className) {
        // div만들기, div클래스주기, div에 텍스트노드 추가, 컨테이너와 form의 selector 변수 선언, insert하기
		const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#calc-form');
        container.insertBefore('div, form');
	}
}

document.getElementById('class-form').addEventListener('submit', function (e) {
	const className = document.getElementById('class-name').value,
		company = document.getElementById('company').value,
		ageGroup = document.getElementById('age-group').value,
		book1 = document.getElementById('book1').value,
		price = document.getElementById('price').value;
	const addClass = new AddClass(className, company, ageGroup, book1, price);
	const ui = new UI();
	console.log(ui);
	if (className === '' || company === '' || ageGroup === '' || book1 === '' || price === '') {
		// alert('빈칸을 채워주세요.');
		ui.addClassToList(addClass);
	} else {
		ui.addClassToList(addClass);
		ui.clearFields();
		// ui.clearFields();
	}
	// console.log(company);
	e.preventDefault();
});

document.getElementById('class-list').addEventListener('click', function (e) {
	const ui = new UI();
	ui.deleteClass(e.target);
	e.preventDefault();
});
