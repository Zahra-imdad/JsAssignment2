//que 1
var first = prompt("Please enter your first name", "firstname");
var second = prompt("Please enter your second name", "secondname");
var full = first + second;
alert( "Welcome !" +full);

//////que 2
var phone = prompt("Please enter your favourite phone", "samsung");
document.write( "My favurite phone is :" +phone);
var n= phone.length;
document.write(n);

//que 3
var index1= "pakistan";
var word= index1.indexOf("n");
document.write("String: <br>"+index1 + "<br> index of n: " +word);

//que 4
var str = "hello world";
var find = str.lastIndexOf("l");
document.write("String: "+ str+"<br> last index of l is :" +find);
//que 5
var str = "Pakistani";
var res = str.charAt(3);
document.write("<br>character at index 3 :" +res);
//Que 6
var first = prompt("Please enter your first name", "firstname");
var second = prompt("Please enter your second name", "secondname");
alert( "Welcome !" +first+second );
//Que 7
var city = "Hyderabad";
var res1 = city.replace("Hyder", "Islam");
document.write("City: "+ city+"<br>"+res1);
//Que 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var res = message.replace("and", "&");
document.write("<br>"+res);
//

  var y = "472";
  var x = + y;
  document.write("<br>" +typeof y + "<br>" + typeof x);
//*****************************************************
var ask = prompt("Enter", "peanut");
var pr= ask.toUpperCase();
  document.write("<br>" +pr + "<br>");
///*****************************************************
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
document.write(titleCase("javascript"));
/////////////////////////////////////////////
var num = 36.36;
var n = num.toString();
document.write("<br>" +typeof num + "<br>" + typeof n);
//////////////////////////////////////
var userName=prompt("Enter your Input: ");
checkValidName(userName);
function checkValidName(un)
{
    var message;
    var split=[];
    var arr=[];
    for(var i=0;i<un.length;i++)
    {
        split[i]=un.split("&nbsp;");
        arr[i]=un.charCodeAt(i);
        if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
        {
                message="Correct User Name";
        }
        while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
        {
            alert("please enter a valid userName");                                                                                                                   
            userName=prompt("Enter your Input: ");
            split[i]=un.split("&nbsp;");
            arr[i]=un.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                message="correct in";
                break;
            }
        }

    }
    alert(message);
}
//**************************************************
var e=["apple","mango","banana","orange"];
var n = str.search(v);
var v=prompt("enter seach");
document.write(n);
/////////////////////////////////////
  var university = "University of Karachi";
  var res = university.split("/~/");
  document.write(res)
  //****************************************
  var str = prompt("enter string");
var n = str.charAt(str.length - 1);
document.write("<br> last index of userinput is at :" +n);

