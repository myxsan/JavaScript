let content = document.querySelector('#date')
var today = new Date();
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function timeCount() {
    var today = new Date();

    var hour = today.getHours();
    if(hour<10)hour = "0"+hour;

    var minute = today.getMinutes();
    if(minute<10)minute = "0"+minute;

    var second = today.getSeconds();
    if(second<10)second = "0"+second;

    document.getElementById("date").innerHTML = `${hour}:${minute}:${second} ${days[today.getDay()]}`;

    setTimeout("timeCount()", 1000);
}