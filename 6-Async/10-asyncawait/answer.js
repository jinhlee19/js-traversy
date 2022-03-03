// es7, 2016 기능 - 웹팩, 바벨로 컴파일해서 사용

/*
function 앞에 단순히 async를 붙이는 것만으로도 Promise를 return 한다.
async function myFunc(){
	return 'hello';
 }
--> THIS RETURNS AT CONSOLE AS 
--> Promise {[[PromiseStatus]]: ...}
*/


// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if(!error){
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once its resolved
  const data = await response.json();

  // only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));