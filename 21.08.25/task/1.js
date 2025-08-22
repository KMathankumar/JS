<!doctype html>
<html>
<head>
<title>destruct</title>
</head>
<body>
<script>
let person={name:"Mathan", age:"20"};
let {city="theni",state="tn"}=person;
console.log(city);
console.log(state);

let fruit=["apple,"grapes","orange","mango","strawberry"];
let [fruit1,fruit2]=fruit;
let {[0]:fruit1,[1]:fruit2,[2]:fruit3}=fruit
console.log(fruit1);
console.log(fruit2);
console.log(fruit6);




</script>
</body>
</html>