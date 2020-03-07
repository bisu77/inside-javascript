// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    age: 30,
    major: 'computer science'
};

// for in문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}

// 마침표 표기법은 안 됨. prop는 문자열 형태로 출력되기 때문
for (prop in foo) {
    console.log(prop, foo.prop);
}