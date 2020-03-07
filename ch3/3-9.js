var objA = {
    val : 40
};
var objB = objA;

console.log(objA.val);  // 40
console.log(objB.val);  // 40

objB.val = 50;
console.log(objA.val);  // 50
console.log(objB.val);  // 50

/*
대입 시 얕은 복사가 이루어짐
(같은 주소 값을 바라보고 있어서, 값을 수정하면 같이 수정 됨)
*/
