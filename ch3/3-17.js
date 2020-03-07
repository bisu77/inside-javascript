// arr 배열 생성
var arr = ['zero', 'one', 'two'];

// push() 메서드 호출
arr.push('three');
console.log(arr); // [‘zero’, ‘one’, ‘two’, ‘three’]

// length 값 변경 후, push() 메서드 호출
arr.length = 5;
arr.push('four');
console.log(arr);// [‘zero’, ‘one’, ‘two’, ‘three’, undefined, 'four']


/*
위 경우, length 선언 시 배열의 index가 0,1,2,3,4로 늘어난 후,
push 함수를 써서 four를 추가해 index 5에 추가되어서 위의 결과 값이 나타난다.

이렇듯 배열의 length 프로퍼티는 배열 메서드 동작에 영향을 주는 만큼 중요한 프로퍼티이다.
*/
