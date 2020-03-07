var foo = {
    name: 'foo',
    age: 30
};

console.log(foo.toString());

console.dir(foo);

/*
foo 객체에는 toString 메서드가 없음에도 불구하고 정상적으로 출력된 이유는,
ECMAScript 명세서에는 '모든 객체는 프로토 타입을 갖는다.' 고 명시되어 있다.
ECMAScript 명세서에는 이를 [[Prototype]] 으로 명시, 크롬의 경우 _proto_ 로 명시되어 있다.

위의 foo 객체는 Object.prototype 객체를 상속받았다.
*/
