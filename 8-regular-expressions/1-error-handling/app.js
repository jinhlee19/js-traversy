const user = {email: 'jdoe@gmail.com'};

try {
  // Produce a ReferenceError
  // myFunction();

  // DIFFERENT TYPES OF ERROR

  //   Produce a TypeError
  //   null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');


  // Will produce a URIError
  // decodeURIComponent('%'); // URI error,...uri malformed...

  // if(!user.name) {
  //   //throw 'User has no name';
  //   throw new SyntaxError('User has no name');
  // }

} catch(e) {
    console.log('Error!!!')
    // console.log(e);
    console.log(e.message); // myFunction is not defined
    // *** 아마 요걸로 쓰게될듯.
    console.log(e.name); // ReferenceError
    console.log(e instanceof ReferenceError); // true
    console.log(e instanceof TypeError); // false
    console.log(`User Error: ${e.message}`); // User Error: myFunction is not defined
  } finally {
  // finally - runs no matter what. 무조건 실행됨.
  console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');
