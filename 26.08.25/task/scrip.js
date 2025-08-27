let a=parseFloat(prompt("Enter number 1:"));
let b=parseFloat(prompt("Enter number 2:"));
let result;

var res=document.getElementById("result");

function add() {
result = a + b;
res.textContent="Result="+result;
}

function sub() {
result=a-b;
res.textContent="Result="+result;
}

function mul() {
result=a*b;
res.textContent="Result="+result;
}

function div() {
result=a/b;
res.textContent="Result="+result;
}