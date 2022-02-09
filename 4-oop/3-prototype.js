////// Prototype - Intro

/*
- Javascript는 다른 언어들과 다르게 class based가 아니다. 
- 모든 자바스크립트 객체는 프로토타입을 갖는다.
- 프로토타입은 그 자체로 객체다.
- 모든 객체는 그들의 프로퍼티와 메소드를 상속 inherit 한다. 
- Prototype Chain+
*/

//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // } 
  // 이름정보는 개별적이지만 b-day계산은 동일하게 적용되기 때문에 직접적으로 객체에 넣는 것보다
  // prototype으로 해야한다고 한다.
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff =  Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');
 
console.log(mary); //  Person object

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));

/* 
정리하자면.. 
- 자바스크립트는 class문법이 원래 없고 prototype을 통해서 프로퍼티나 메서드를 만들고 전달할 수 있다.
- es6이후 class문법이 들어왔더라도 기반은 어차피 프로토타입 언어.
- 메모리 낭비 방지 목적.
- 질문: es6 클래스로 사용하면 자동으로 prototype에 적용된다고 하는데 그럼 새로운 문법에서의 prototype은?
참고1: https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
참고2: https://learnjs.vlpt.us/basics/10-prototype-class.html
*/