///////////////////////////
////// 10. Bubbling Delegation 

////// EVENT BUBBLING 
// 한 요소에서 이벤트 발생 시, 해당 이벤트가 더 상위의 요소로 전달되는 특성.
// 브라우저의 감지방식 - 
// child - .card-title -부터 부모의 부모의 부모까지 전부 불러진다.
// bubbles up to dom. child to all the parents are called. 

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title')
});

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('card-content')
});

document.querySelector('.card').addEventListener('click', function(){
    console.log('card')
});

document.querySelector('.col').addEventListener('click', function(){
    console.log('col')
});


////// EVENT DELEGATION

// const delItem = document.querySelector('delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // if(e.target.parentElement.className.contains('delete-item')){
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        console.log(e.target);        
        e.target.parentElement.parentElement.remove();
    }
}

// /////// ForEach Ver.

xBtns = document.querySelectorAll('.delete-item');
console.log(xBtns);
xBtns.forEach(function(xBtn){
    xBtn.addEventListener('click', logEvent);
});

function logEvent(e){
    e.target.parentElement.parentElement.remove();
}