////// Constructors and the 'this' Keyword ***

// Person constructor 
// arg -> name
function Person(name,dob){
    // keyword 'this' refers to the current instance of object
    this.name = name;    
    // this.age = age;
    // date object -
    this.birthday = new Date(dob);
    this.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        // we can use this to access any properties and methods within person.
        const ageDate = new Date(diff);
        return ageDate.getUTCFullYear() - 1970;
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
        // Date Method 는 1970.1.1. 기준으로 계산되므로 참고하자.
    }
}

// // This when its in Global Scope, it pertains to the window object.
console.log(this); // Returns Window object 
this.alert(1);


// // instantiate an object - use new keyword*
const brad = new Person('Brad',36);
const rafy = new Person('Rafy', 30);

console.log(rafy);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calcAge());
