// 배열 생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length); // 3

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length); // 3

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length); // 4

// 배열 객체 출력
console.dir(arr);


/*
배열 변수 역시 Object.prototype도 상속받는 객체이므로 동적으로 프로퍼티 추가가 가능하다.
이 때 프로퍼티가 추가된 것이지. 배열이 추가 된 것은 아니므로 length를 찍어보면 length값은 동일하다
*/
