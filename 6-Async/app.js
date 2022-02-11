document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();
    // call by '.open('type Of Request', )' 
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function(){
        console.log(this);
        if(this.status === 200) {
            console.log(this.responseText);
        }
    }
    xhr.send();
    // 아무튼 ajax랑 XHR이 더 복잡함. fetch가 newer std.

    // OPEN - specify type of request and url
    
    // HTTP STATUS
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}
