var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);//200
    console.log(obj);//200
}

changeArg(a, objA);

console.log(a);//100
console.log(objA);//200


/*
기본타입의 경우 call by value
참조타입의 경우 call by reference
*/
