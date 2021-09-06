/*Комментарии

типы данных

*/


// Типы данных
var Revenue = "Выручка";
var NetProfit = "Чистая прибыль";

let course = "Курс";
const api = "poloneix.com";
const USD;
const ETH;
const USD_ETH;
const _eE;
let _tT7;

var t7_;

var a;
a+2; // undefined -> NaN + 2 = NaN

console.log(n*32);//null = 0
var n = null;
var _nan = NaN;


// видно за блоком обьвленное var
if (true) {
    var x = 5;
}
console.log(x); //5 - видно за блоком

// за блоком не видно оббяленное с let
if (true) {
    let y = 5;
}
console.log(y); //ReferenceError - не видно обьявленное let за блоком

// поднятие нет Let
function do_smth (){
    console.log(foo);
    let foo = 2; //не поднимается вверх
}

// поднятие есть var и const
function rize() {
    console.log(myvar);
    myvar = "mvr";
}