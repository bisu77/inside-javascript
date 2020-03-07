// 객체 리터럴을 통한 foo 객체 생성
var foo = {
    name: 'foo',
    nickname : 'babo'
};

console.log(foo.nickname);//babo
delete foo.nickname;
console.log(foo.nickname);//undefined

delete foo;
console.log(foo.name);//foo

/*
delete 연산은 객체를 삭제하지 못함.
객체의 프로퍼티만 삭제할 수 있음
*/