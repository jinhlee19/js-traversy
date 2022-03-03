// Define UI Vars

// const form
// const taskList
// const clearBtn
// const filter
// const taskInput

// Load all event Listener
loadEventListeners();

	// Add task event
	// Remove task event
	// task item마다 x를 처리하기 위해 event delegation 사용.
	// Clear task Event
	// Filter tasks event
	// DOM Load Event

// Get Tasks from LS
		// Add class
		// Create text node and append to li
		// Create new link element
		// Add class
		// Add icon html
		// Append the link to li
		// Append li to ul

// Add Task
	// Create li element
	// Add class
	// Create text node and append to li
	// Create new link element
	// Add class
	// Add icon html
	// Append the link to li
	// Append li to ul
	// Store in LS
	// Clear input

// Store Task

// Remove Task

// Remove from LS

// Clear Tasks

// ClearTask from LS


// Filter
/* 
*** 
getElementby -> HTML Collection,git querySelector -> nodelist
HTML collection --> array로 변환해서 forEach문을 작성해야하지만
querySelectorAll --> nodelist를 생성하므로 forEach가 작동된다.

1) document.querySelectorAll('.collection-item') --> 결과: li들..
	NodeList [ li.collection-item, li.collection-item ], ...
2) 각 li들의 첫번째 node는 34열의 
	li.appendChild(document.createTextNode(taskInput.value));
	로 생성된 텍스트이다. 
3) 만약 이 값과 일치 값이 indexof() method와 없어서 -1이라는 값을 출력하면,
	-1와 일치되지 않기 때문에 출력, 그외엔 출력하지 않는다.
*** Rule of indexOf
The indexOf() method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive.
*/

