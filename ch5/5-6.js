var value = "value1";

function printValue() {
    return value;
}
function printFunc(func) {
    var value = "value2";
    console.log(func());
}

printFunc(printValue);

//스코프 체인 확인
//printValue함수의 스코프는 0 : printValue 변수 객체 1: 전역 객체 순서임.