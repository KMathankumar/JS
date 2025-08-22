let myFun=(a,b)=>a+b;
let result=myFun(10,5);
console.log(result);


let a=[10,20,30];
let add=a.reduce(function(a,b){
return a+b;
})

console.log(add);


let b=(function(){
let m=12;
let n=10;
return m*n;
})();

console.log(b);
