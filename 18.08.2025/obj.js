let object={name:"Mathan",age:21,city:"Theni"};
console.log("Hello My name is"+object.name);
console.log("<h1>Hello My name is"+object.name+"</h1>");
console.log("<h2>Age is"+object.age+"</h2>");
console.log("<h3>City is"+object.city+"</h3>");

let object1={name:"Mathan",Age:21,city:"THeni",address:
{
door:"12/4",
street:"ABC Street",
city:"theni",
pin:235487}};
console.log(Object.keys(object1));
console.log(Object.values(object1));
console.log(Object.entries(object1));
console.log(object1.Age);
delete object1.name;
console.log(object1 instanceof Object);

Object.freeze(object1);
object1.Age=50;
console.log(object1.Age);

let object2={
greet:function(){
console.log("This is an example for creating function inside object");
}};
object2.greet(); 