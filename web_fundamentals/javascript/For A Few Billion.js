function payForServant () {
    var reward = 0.01; 
    for (var i = 2; i<= 30; i++){
        reward = reward * 2; 
        // console.log(i);
    }
    console.log (reward);
}
payForServant();


function getToAThousand (){
    var days = 1
    for (var i = 0.01; i<=10000; i*=2){
        days = days + 1;
    }
    console.log(days);
}
getToAThousand();


function getToABillion (){
    var days = 1
    for (var i = 0.01; i<=1000000000; i*=2){
        days = days + 1;
    }
    console.log(days);
}

