// add() 함수
function add(a, b) {
    // arguments 객체 출력
    console.dir(arguments);
    return a+b;
}

console.log(add(1)); // NaN
console.log(add(1,2)); // 3
console.log(add(1,2,3)); // 3

//arguments 객체를 사용해 인자 개수에 상관 없이 사용할 수 있음.
function sum(){
    var result = 0;
    for(var i=0;i<arguments.length;i++)
        result += arguments[i];
    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));