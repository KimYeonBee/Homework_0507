const a = document.getElementsByClassName("text");
console.log(a);

const b = document.getElementById("params");
console.log(b);

const c = document.getElementById("params").getElementsByTagName('h1');
console.log(c);

console.dir(document.querySelector('#params h1'));

const class2 = document.getElementById('second');
console.log(class2);
class2.setAttribute('class', 'black orange');

const text1 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
const para1 = document.getElementById('params');
const h3 = document.createElement('h3');
h3.setAttribute('class', 'white');
h3.appendChild(text1);
para1.appendChild(h3);