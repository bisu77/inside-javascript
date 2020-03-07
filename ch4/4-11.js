// 함수를 리턴하는 foo() 함수 정의
var foo = function() {
    return function () {
        console.log('this function is the return value.')
    };
};

var bar = foo();
bar();

/*
함수변수 foo는 return으로 익명함수를 반환한다.
bar는 foo의 익명함수를 참조한다.
*/
