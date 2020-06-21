var d = new Date(2019, 10, 22, 9, 12, 20, 0);
document.write(d);
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var day = new Date();
  var mon = month[day.getMonth()];
  document.write(mon);
  //************************************
  var day = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var week = weekday[day.getDay()];
document.write("<br>"+week);
  //************************************
  var day = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var week = weekday[day.getDay()];
  if(week=='Saturday' || week=="Sunday") {
document.write("<br>"+week+ "Its a fun day!");
}
else
{
	document.write("work day");
}
//************************************
today = new Date();
var day = today.getDate();
  if(day>=15) {
document.write("<br>"+week+ "Last 15 days");
}
else
{
	document.write("First 15 days");
}
  //************************************
var j = new Date();
var x = j.getHours()

if(x<=12){
	document.write("<br> its AM");
}
else{
	document.write("its PM");
}
  //************************************
var today = new Date();
var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
document.write(lastDayOfMonth);
  //************************************
var doomsday = new Date("June 15, 2035");


var msToday = today.getTime();

var msDoomsday = doomsday.getTime();



var msDiff = msDoomsday - msToday;
document.write(msDiff);
  //************************************
var date = new Date(2018, 11, 24, 10, 33, 30, 0);
var date1 = new Date(2018, 1, 1, 1, 1, 1, 0);
var dif= date-date1;
document.write(diff);
  //************************************
var age= prompt("enter age");
var day = new Date();
var full = day.getFullYear();
var birth= full-age;
document.write("birthyear:"+birth);
