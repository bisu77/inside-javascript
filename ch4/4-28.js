// Person 생성자 함수
var Person = function (name) {
    this.name = name;
};

// foo 객체 생성
var foo = new Person('foo');
console.log(foo.name); // foo

// foo 객체 생성
var foo2 = new Person('foo2');
console.log(foo2.name); // foo2
/*
Person : 생성자 함수
foo : 객체
foo2 : 객체
*/
