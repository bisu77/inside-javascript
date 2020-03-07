var arr = [];
console.log(arr.length); // 0

arr[0] = 0; // arr.length = 1
arr[1] = 1; // arr.length = 2
arr[2] = 2; // arr.length = 3
arr[100] = 100;
console.log(arr.length); // 101

/*
배열의 length 프로퍼티는 배열에 존재하는 원소 개수를 의미하는 것이 아니라, 가장 큰 인덱스에 +1한 값이다.
length 값이 101이라 하더라도 실제 메모리는 length 크기처럼 할당 되지 않는다. (똑똑하네)
*/
