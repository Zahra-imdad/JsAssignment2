var d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.write(d);
//******************************
var a=  prompt("frstname");
var b=prompt("lastname");
var name= frstname+lastname;
document.write("welcome!"+name);
//*******************************
var num1= prompt("enter num");
var num2= prompt("enter num2");
document.write("sum"+num1+num2);
//*******************************
var num1=prompt("enter num");
var num2=prompt("enter num2");
var num3=prompt("enter opertaor");
var op= num1 num2 num3;
document.write(op);
//*******************************
var num=prompt("enter num");
var op= Math.sqrt(num);
document.write(op);
//*******************************
var x=prompt("enter num");
  if (x === 0)
 {
    return 1;
 }
  else{ x * factorial(x-1);
       }  ;
function pythagorean(sideA, sideB){
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}

console.log(pythagorean(4, 3));
//*******************************
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
document.write(titleCase("the quick borwn fox"));
//*******************************
function check_Palindrome(str_entry){
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;
// Check whether the string is empty or not
	if(cstr==="") {
		console.log("Nothing found!");
		return false;
	}
// Check if the length of the string is even or odd 
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
// If the length of the string is 1 then it becomes a palindrome
		if (cstr.length === 1) {
			console.log("Entry is a palindrome.");
			return true;
		} else {
// If the length of the string is odd ignore middle character
			ccount = (cstr.length - 1) / 2;
		}
	}
// Loop through to check the first character to the last character and then move next
	for (var x = 0; x < ccount; x++) {

		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("Entry is not a palindrome.");
			return false;
		}
	}
	console.log("The entry is a palindrome.");
	return true;
}
check_Palindrome('madam');
//////////////////////////////////////
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));
//*******************************

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('hello.com', 'o'));
