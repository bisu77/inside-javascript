// myFunction 함수 정의
function myFunction() {
    return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);

/*
함수는 별도의 prototype 프로퍼티를 갖는다.
모든 객체의 부모를 나타내는 [[Prototype]]과 혼동하지 말아야 한다.
*/
