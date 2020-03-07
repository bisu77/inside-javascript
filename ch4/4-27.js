// 내부 함수 this 바인딩
var value = 100;

var myObject = {
    value: 1,
    func1: function () {
        var that = this;

        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 = function () {
            that.value += 1;
            console.log('func2() called. this.value : ' + that.value);

            func3 = function () {
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1(); // func1 메서드 호출

/*
내부함수 에서의 this는 윈도우 전역으로 바인딩 되므로
부모함수의 변수를 내부함수가 참조할 수 있다는 점을 이용해서 해결할 수 있다
*/
