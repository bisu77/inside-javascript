console.log(add(2,3)); // 5

// 함수 선언문 형태로 add() 함수 정의
function add(x, y) {
    return x + y;
}

console.log(add(3, 4)); // 7

/*
함수 호이스팅 : 함수선언문 형태로 생성한 함수의 유효범우는 맨 처음부터 시작한다.
이러한 자바스크립트 규칙으로 인해 함수선언식 형태보다는 함수표현식으로 작성하는 것을 권장한다.
*/
