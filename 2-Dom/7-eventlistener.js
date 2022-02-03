///////////////////////////
////// 7. Event Listener and the Event Object

document.querySelector('.clear-tasks').addEventListener('click', function(e){
    console.log('Hello, World')
    // e.preventDefault();
});

/* 
그냥 참고.
.clear-tasks 의 링크가 없을 경우(href=""), default로 원상태로 페이지가 돌아옴. 
#를 주게 되면 멈추고, 사이트 링크 설정시 콘솔을 찍고 바로 이동함.
기본값을 막으려면 함수 이벤트 파라미터인 e를 주고 e.preventDeafult(); 로 해주면 방지 가능.
*/

// document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
	// console.log('Clicked');

	let val;
	val = e;
	
    // Event Target Element
    val = e.target;
	val = e.target.className;
	val = e.target.classList;

    e.target.innerText = 'Hello';

    // Event Type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coords event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coords event relative to the element
    val = e.offsetY;
    val = e.offsetX;    

	console.log(val);
}


