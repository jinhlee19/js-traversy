///////////////////////////
////// 4. Multiple Elements 

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn = addEventListener('click', runEvent);
// Doubleclick 
clearBtn.addEventListener('dblclick', runEvent);

// MouseDown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
clearBtn.addEventListener('mouseup', runEvent);


// Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);

// Mouseover
card.addEventListener('mouseover', runEvent);
// Mouseout
card.addEventListener('mouseout', runEvent);

// Mousemove
card.addEventListener('mousemove', runEvent);
// interactive design 또는 게임에서 사용된다.


// enter/leave 와 over/out의 차이는 부모에 걸경우 전자는 부모내에서 변화가 없고, 후자는 부모 내 자식까지 반응한다. 

// Event Handler
function runEvent(e){
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX/6},${e.offsetY},40)`;
}