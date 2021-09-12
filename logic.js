var order = ["date", "amount", "course", "price"]

function buyNsaleUp(){};
function buyNsaleDown (){};

var timing;
var strategy;


var checkTimout;

// strategyScalping
//
//functions catch data from SQL
//
var curCourse;
var courseChengeDynamic; // динамика изменения курса: ловить пампы и дампы
var marketDepth; // ловить глубину рынка для получерия информации об обьеме торгов

var amount =10;
var buyCourse = 2300;
var saleCourse = courseRizePer*buyCourse;

var orderROI = 0.1;
var orderMargin = 30;
var courseRizePer = 0.1;
var courseDownPer = 0.1;

//waiting for course down for n%

// если курс держится колеблется меньше 0,1% принимаем решение о покупке

if (curCourse<=buyCourse){

buyCrypto(amount);

}

//waiting for course rize for n%
// если курс держится колеблется меньше 0,1% принимаем решение о продаже

if (curCourse>=buyCorse+orderMargin){
sendEmail();
saleCrypto(amount);
}