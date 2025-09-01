//object destructing 
let person={name:"js", age:"30"};
let {city="theni", state="tn"}=person;
console.log(city);
console.log(state);

//array destructing 
let fruit=["apple","grapes","orange","mango","strawberry"];
let [fruit1,fruit2]=fruit;
let {[0]:fruit1,[1]:fruit2,[2]:fruit3}=fruit
console.log(fruit1);
console.log(fruit2);
console.log(fruit6);

//swapping using destructing method

let fname=50;
let lname="js";
[fname,lname]=[lname,fname];
console.log(fname);
console.log(lname);

let fruits=new Map([["apple",50],["grapes",80],["mango",100]]);
console.log(fruits);
let f1="";
for(let [key,value] of fruits)
{
f1+="<p>"+key+"is"+value+"</p>"
}
document.write(f1);



