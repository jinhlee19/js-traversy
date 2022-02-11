///////////////////////////
////// 1. DOCUMENT OBJECTS

let val;

val = document;
val = document.all;
val = document.all[1]; // head - access with index, item of collection
val = document.all.length; // number of elements in the DOM
val = document.head; // head
val = document.body; // body
val = document.doctype; // <!DOCTYPE html>
val = document.domain; // 127.0.0.1
val = document.URL; //http://127.0.0.1:5500/2-dom/index.html#
val = document.characterSet; // utf-8
val = document.contentType; // text/html


// possible without selector but not recommended.
val = document.forms; // form 전체
// select all the forms. gives back html collection with index and more...
val = document.forms[0]; // form#tast-form
val = document.forms[0].id; // tast-form
val = document.forms[0].method; // get
val = document.forms[0].action; // action="" of form

val = document.links; // HTMLCollection(6)[...]
// 문서의 링크 전체 컬렉션

val = document.links[0];  // a.delete-item.secondary-content
val = document.links[0].id; 
val = document.links[0].className; // delete-item secondary-content
val = document.links[0].classList; // DOMTokenList(2)['delete-item', ..., value:'...']
// DOM token list of different classes
val = document.links[0].classList[0]; // delete-item

val = document.images; // HTMLCollections[...]

val = document.scripts; // HTMLCollections[...] 전체 script 표시
val = document.scripts[2].getAttribute('src'); // app.js 
// 2번째 스크립트의 src

const scripts = document.scripts; 

const scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
