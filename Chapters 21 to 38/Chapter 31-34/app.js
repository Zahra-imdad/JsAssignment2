var num= prompt("enter number");
document.write("number"+num);
var r= Math.round(num);
document.write("rouund off:"+ Math.round(num) +" <br> Floor:" + Math.floor(num) +" <br> Ceil:" + Math.ceil(num));
///////////////////////////////////////////////////////
var num= prompt("enter number");
document.write("number"+num);
var r= Math.round(num);
document.write("rouund off:"+ Math.round(num) +" <br> Floor:" + Math.floor(num) +" <br> Ceil:" + Math.ceil(num));
////////////////////////////
var num= prompt("enter number");
document.write("number"+num);
var r= Math.abs(num);
document.write("Absolute value:"+r);
////////////////////////////////////////////////
 var rand = Math.round(Math.random() * 6);
 document.write( "rand:"+rand);
 ////////////////////////////////////
  var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("heads");
    }else{
        flip("tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};
/////////////////////////////////////////////
 var rand = Math.round(Math.random() * 100);
 document.write( "rand:"+rand);
 //////////////////////////////////////////////
 

