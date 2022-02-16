const user = {email: 'jdoe@gmail.com'};

try {
//   Produce a ReferenceError
//   myFunction();

//   Produce a TypeError
//   null.myFunction();

  // Will produce SyntaxError
  // eval('Hello World');

  // Will produce a URIError
  // decodeURIComponent('%');

  if(!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }

} catch(e) {
    // console.log(e);
    console.log(e.message);
    
    // *** 아마 요걸로 쓰게될듯.
    console.log(e.name);

    console.log(e instanceof TypeError);
    console.log(`User Error: ${e.message}`);
} finally {
  console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');