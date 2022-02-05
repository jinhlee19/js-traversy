// Alert
window.alert('warning');
alert('same warning');

// Prompt 
const input = prompt();
alert(input);

// Confirm

if (confirm('u sure?')) {
	console.log('Yes');
} else {
	console.log('No');
}

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth; 

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
// ** get 주소? 받을 수 있다. domain.com?id=1&name=brad..
val = window.location.search; 

// Redirect
window.location.href = 'http://google.com'

// Reload
window.location.reload();

// History Object
window.history.go(-3);
window.history.length;

// Navigator Object
val = window.navigator.language;
val = window.navigator.userAgent;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.platform;
val = window.navigator.vendor;

console.log(val);
