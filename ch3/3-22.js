var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr); // ["zero", "one", undefined × 1 , "three"]
console.log(arr.length); // 4


/*
배열의 요소를 delete 연산으로 삭제 시 배열의 index 자체 삭제가 아니라
해당 배열 요소를 undefined 처리 함.
index 자체 삭제를 하려면 splice() 배열 메소드를 사용해야 함
*/
