// 배열 생성
var arr = ['zero', 'one', 'two'];

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';

// 배열 원소 추가
arr[3] = 'red';

//배열의 요소+프로퍼티 까지 출력
for (var prop in arr) {
    console.log(prop, arr[prop]);
}

//배열의 요소만을 출력
for (var i=0; i<arr.length; i++) {
    console.log(i, arr[i]);
}