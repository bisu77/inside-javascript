// colorsArray 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]); // orange
console.log(colorsArray[1]); // yellow
console.log(colorsArray[2]); // green

// colorsObj 객체
var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};
console.log(colorsObj[0]); // orange
console.log(colorsObj[1]); // yellow
console.log(colorsObj[2]); // green
//객체 대괄호 표기 시 숫자가 들어올 경우 문자열로 처리해주기 때문에 오류가 발생하지 않는다

// typeof 연산자 비교
console.log(typeof colorsArray); // object
console.log(typeof colorsObj);  // object

// length 프로퍼티
console.log(colorsArray.length); // 3
console.log(colorsObj.length); // undefined

// 배열 표준 베서드
colorsArray.push('red'); // ['orange', 'yellow', 'green', 'red']
colorsObj.push('red'); // Uncaught TypeError: Object #<Object> has no method 'push'

/*
colorsArray(배열) => Array.prototype => Object.prototype을 상속받음
colorsObj(객체) => Object.prototype을 상속

따라서 colorsObj(객체)는 Array.prototype의 push와 length를 사용할 수 없음
*/
