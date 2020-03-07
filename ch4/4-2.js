// add() 함수 표현식
var add = function (x, y) {
    return x + y;
};//함수변수

var plus = add;

console.log(add(3,4)); // 7
console.log(plus(5,6)); // 11

/*
add와 plus 모두 동일한 익명 함수를 참조하고 있음
*/
