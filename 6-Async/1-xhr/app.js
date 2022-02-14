document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();
    // OPEN - specify type of request and url
    // call by '.open('type Of Request', )' 
    // get request -> read the file or URL and then data
    xhr.open('GET', 'data.txt', true);
    
    // 1: server connection established
    // ////// Optional - 스피너(Spinner)나 로더(Loader) 등을 사용할 때 필요함**
    // xhr.onprogress= function(){
    //     console.log('READYSTATE', xhr.readyState);  
    // }
    // Onload
    xhr.onload = function(){
        console.log('READYSTATE', xhr.readyState);  
        console.log(this);
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h6>${this.responseText}</h6>`;
        }
    }
    xhr.onerror = function(){
        console.log('Request error...')
    }

    // 사용하지 않으나 statechange를 확인할 수 있다.
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE', xhr.readyState);  
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }
    // Fin.
    xhr.send();

    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request -> spinner or loader 
    // 4: request finished and response is ready

    // HTTP STATUS
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
    
    /* 아무튼 ajax랑 XHR이 더 복잡함. fetch가 newer std.*/ 
}
