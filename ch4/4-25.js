var test = 'This is test';
console.log(window.test);

// sayFoo() 함수
var sayFoo = function () {
    console.log(this.test); // sayFoo() 함수 호출 시 this는 전역 객체에 바인딩된다.
};

sayFoo(); // this.test 출력

var fn1 = function(){
    var test = 'This is fn1 test variable';
    var fn2 = function(){
        console.log(this.test);
    }
    fn2();
}
console.log("=======================");
console.log(window.test);
fn1();//This is test
console.log("=======================");

var obj1 = {
    test : 'This is obj1 test variable',
    fn : function(){
        console.log(this.test);
    }
};
console.log("=======================");
console.log(window.test);
obj1.fn();//This is obj1 test variable
console.log("=======================");

/*
부모함수에서 내부함수 호출의 경우 내부함수의 this는 window 전역객체
일반객체의 프로퍼티 함수호출의 경우 프로퍼티 함수의 this는 일반객체 내부
*/
