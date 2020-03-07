// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]); // undefined

// 배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight'
emptyArr[7] = true;
console.log(emptyArr); // [100, undefined × 2, "eight", undefined × 3, true]
console.log(emptyArr.length); // 8

//배열의 크기와 무관하게 동적으로 배열 생성이 가능하며 인덱스의 순서 역시 상관 없다.