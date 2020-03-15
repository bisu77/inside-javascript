//생성자 함수
function Person(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var qux = Person('qux', 20, 'man');
console.log(qux);  // undefined

console.log(window.name); // qux
console.log(window.age); // 20
console.log(window.gender); // man
/*
일반함수로 호출해서 this가 window로 바인딩 되어 있는 상태이다.
*/
