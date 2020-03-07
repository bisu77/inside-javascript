// 함수 선언 방식으로 add()함수 정의
function add(x, y) {
    return x+y;
}

// add() 함수 객체에 result, status 프로퍼티 추가
add.result = add(3, 2);
add.status = 'OK';

console.log(add.result); // 5
console.log(add.status); // 'OK'

/*
함수선언식으로 생성된 add함수는 일반 객체처럼 동적프로퍼티 추가가 가능하다.
자바스크립트에서 함수는 객체이다.
*/
