//var moreThen = 1000;
//var lessThen = 1500;

var div = document.createElement("div");
function addDiv(div){};

function clearSet() {
    //alert('Настройки сброшены');
    var val = document.getElementById('lessThen').value;
    alert (document.getElementById('lessThen').innerHTML=val);
    document.getElementById('lessThen').value="";
    
    //alert('Настройки сброшены');
};


function addSet() {
    alert('Настройки сохранены!')
};


function sendEmail() {
    window.open('mailto:andrei.gubsky@gmail.com')
};