// jshint esversion: 6 

//// 7. Template Literal 

const hisName = 'John';
const age = 30;
const job = 'Night watch';
const city = 'the Wall';


// // Without template string (es5) - old way
// html = '<ul><li>hisName: ' + hisName + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' + 
//        '<li>hisName: ' + hisName + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li>' +
//        '</ul>';


// With template strings (es6) - new 
// ***** single quotes('') 말고 backticks(``) !!!!! *****

function hello(){
    return 'Hello!!';
}

html = ` 
    <ul>
        <li>Name: ${hisName}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
    </ul>
    `;

document.body.innerHTML = html;

