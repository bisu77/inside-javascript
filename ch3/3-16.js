var arr = [0, 1, 2];
console.log(arr.length); // 3

arr.length = 5;
console.log(arr); // [0, 1, 2]

arr.length = 2;
console.log(arr); // [0, 1]
console.log(arr[2]); // undefined

/*
배열의 length 프로퍼티는 명시적으로 변경 가능하다.
설정된 length 값 보다 낮은 index의 배열은 삭제된다.
*/
