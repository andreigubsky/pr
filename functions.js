//поднятие функций
foo();

function foo() {
    console.log("bar")
}

baz();

var baz = function(){
    console.log("bar2");
}

// глобальные переменные
window.foo = 'bar';

//константы
const PREFIX = '212';

