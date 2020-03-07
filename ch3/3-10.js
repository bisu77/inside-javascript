var a = 100;
var b = 100;

var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(a == b);  // true
console.log(objA == objB); // false
console.log(objB == objC); // true

console.log(a === b);  // true
console.log(objA === objB); // false
console.log(objB === objC); // true

/*
objA와 objB의 경우 각각의 새로운 참조값을 가르키고 있음
objB와 objC의 경우 같은 참조 값을 가르키고 있음
*/
