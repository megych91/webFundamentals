
    
var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function timenow (HOUR, MINUTE, PERIOD){
    var time= "";
    if (MINUTE >= 30); 
    time+="It's almost ";
    if (MINUTE >= 30);
    time+=(HOUR+1);
    if (PERIOD === "AM");
    time+=" in the morning.";

    console.log(time);
}
timenow (HOUR, MINUTE, PERIOD);


    var hour = 7;
    var minute = 15;
    var period = "PM";

function timeNow (hour, minute, period){
    var time=""; 
    if (minute <= 20) {
    time+="It's just after ";
    }
    if (minute<=59) {
    time+=(hour);
    }
    if (period === "PM") {
    time+=" in the evening."
    }

    console.log(time);
}
timeNow (hour, minute, period);