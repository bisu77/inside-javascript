//함수표현 방식
var factorialVar = function factorial(n) {
    if(n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
};

console.log(factorialVar(3));  // 6
console.log(factorial(3)); // Uncaught ReferenceError: factorial is not defined 에러 발생


/*
함수변수 : factorialVar
함수이름 : factorial

함수 내부에서는 함수 이름으로 재귀호출 가능
함수 외부에서는 함수 이름으로 호출 불가능
위의 경우 함수 외부에서 호출하려면 함수변수를 이용해서 호출해야 함
*/
