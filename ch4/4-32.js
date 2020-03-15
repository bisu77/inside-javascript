function myFunction() {
    console.dir(arguments);//프로토타입:Object

    // arguments.shift(); 에러 발생

    // arguments 객체를 배열로 변환
    var args = Array.prototype.slice.apply(arguments);//프로토타입:Array
    console.dir(args);
}

myFunction(1,2,3);