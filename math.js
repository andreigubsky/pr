var strategyScalping;
var strategyLong;

//Линейная
//a <0 - тренд отрицательный
//a>0 - тренд положительный
//x - номер периода: час, день, месяц, квартал
//b - число пересечения с осью
//a - значение прироста следующего значения

var a = 1;
var x = 2;
var b = 3;

function trendLineS(){
    var f = a*x;
    alert(f);
};


//Линейная y = 1*2+3=5

function trendLineLine(){
    var y = a*x+b;
    alert (y);
};

//Экспоненциальная z= 3+4+16=23

var c1 = 1;
var c2 = 2;
function trendLinePoly(){
    var z = b + c1*Math.pow(x, 2) + c2*Math.pow(x, 3);
    alert(z);
};

//Логарифмическая l= 2*0,693+3=4,38

var c = 2;
var d = 3;
function trendLineLog(){
    var l = c * Math.log(x) +d;
    alert(l);
};





function lineSupport (){

};
function lineResistance (){

};

function trendForce(){};
