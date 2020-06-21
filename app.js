//CHAPTER # 21-25
//STRING METHODS



//Task 1

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + lastName;
// document.write(fullName);




//Task 2

// var phone = prompt("Enter your favourite Mobile Model")
// document.write("My favourite Mobile Model is : "+ phone)
// var z = phone.length;
// document.write("<br>"+z)



//Task 3

// var str = "Pakistani";
// document.write("String: "+ str + "<br>");
//  var n = str.indexOf("n");
//  document.write("Index of 'n' :" + n);



//Task 4

// var str = "Hello World";
// document.write("String : "+ str+"<br>");
// var n = str.lastIndexOf("l");
// document.write("Last Index of L :"+ n);



//Task 5

// var str = "Pakistani";
// document.write("String: "+ str + "<br>");
//  var n = str.charAt(3)
//  document.write("Character at Index 3 :" + n);


//Task 6

// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName.concat(lastName);
// document.write(fullName);


//Task 7

// var str = "Hyderabad";
// document.write("City :"+ str+"<br>");
// var replace = str.replace("Hyder","Islam");
// document.write("After Replacement :"+replace);


//Task 8

// var message = "Ali and sami are best friends, They play cricket and football together. ";
// var replace = message.split("and").join("&");
// document.write(replace) ;


//Task 9

// var str = "472";
// document.write("Value :"+str+"<br>"+"Type : string"+"<br>");
// var num = parseInt(str);
// document.write("Value :"+num+"<br>"+"Type : number");



//Task 10

// var input = prompt("Enter string");
// document.write("User Input :"+input+"<br>");
// var upp = input.toUpperCase();
// document.write("Upper case :"+upp);


//Task 11

// var input = prompt("Enter string");
// document.write("User Input :"+input+"<br>");
// var title = input.charAt(0).toUpperCase();
// var wer = input.slice(1);
// document.write("Title case :"+title+wer);



//Task 12

// var num = 35.36 ;
// var str = Math.floor(num);
// var string = str.toString();
// document.write("Number :"+num+"<br>")
// document.write("Result :"+string)


//Task 13

// var username = prompt("Enter user name");
// var res = String.fromCharCode(33, 44, 46, 64);

// if(username === res){
//   var z = prompt("Enter valid username")
//   document.write(z);
// }
// document.write(username)



//Task 14

// var a  = ["cake","apple pie","cookie","chips","patties"];
// var input = prompt("Welcom to ABC Bakery. What do you want to order"+"\n"+"sir/ma'am?");
// var con = input.toLowerCase();
// for(var i =0; i<=a.length; i++){
// if(a[i] === con){
//     alert(a[i] + "is available at index "+i +" in our bakery")
// }
// else{
//     alert("We are sorry. "+con + " is not available in our bakery")
// }

// }



//Task 15

// var pass = prompt("Enter password: ");
// //var ser = pass.slice(0,1);
// if(pass.charAt(0) === Number.isInteger())
// {

//     alert("Password cannot begin with a number please enter a valid password")

// }
// else if(pass.length<5){
//     alert("Password must be atleat 6 characters long")
// }
// else{
//     document.write(pass)
// }




//Task 16

// var university = "University of Karachi";
// var arr = university.split('');
// for(var i =0; i<arr.length;i++){
//     document.write(arr[i]+"<br>")
// }




//Task 17

// var str = prompt("Enter your country");
// document.write("User Input: "+str)
// var last = str[str.length-1];
// document.write("<br>"+ "Last Character of Input: "+last)




//Task 18

// var temp = "the quick brown fox jumps over the lazy dog";
// var count = (temp.match(/the/g) || []).length;
// document.write(count);










//CHAPTER 26-30



//Task 1

// var num = prompt("Enter a positie integer number");
//if(num>0){
// document.write("Number : "+num+"<br>");
// var round = Math.round(num);
// document.write("Round off value : "+round+"<br>");
// var floor = Math.floor(num);
// document.write("Floor value : "+floor+"<br>")
// var cei = Math.ceil(num);
// document.write("Ceil value : "+cei)
//}
//else{
 //   prompt("Enter a valid positive integer value")
//}





//Task 2

// var num = prompt("Enter a Negative integer number");
// if(num<0){
// document.write("Number : "+num+"<br>");
// var round = Math.round(num);
// document.write("Round off value : "+round+"<br>");
// var floor = Math.floor(num);
// document.write("Floor value : "+floor+"<br>")
// var cei = Math.ceil(num);
// document.write("Ceil value : "+cei)
// }
// else{
//     alert("Enter a valid negative integer")
// }




//Task 3

// var number = prompt("Enter value");
// var absolute = Math.abs(number);
// document.write(absolute)



//Task 4

// var number = Math.random()*4;
// var ceil = Math.ceil(number)
// document.write("Random dice value : "+ceil+"<br>");
// var num = Math.random()*6;
// var ceil2 = Math.ceil(num)
// document.write("Random dice value : "+ceil2);




//Task 5

// var number = Math.random()*2;
// var ceil = Math.floor(number)
// if(ceil === 0){
// document.write(ceil+"<br>"+"Random coin value : "+"Heads"+"<br>");
// }
// else{
//     document.write(ceil+"<br>"+"Random coin value : "+"Tails"); 
// }




//Task 6

// var number = Math.random()*100;
// var floor = Math.floor(number);
// document.write("random number between 1 and 100 : "+floor);




//Task 7

// var weight = prompt("Enter your weight in kilograms");
// var int = parseInt(weight);
// document.write("The weight of user is "+int +"<br>");
// var float = parseFloat(weight)
// document.write("The weight of user is "+float +"<br>");
// var string = weight.toString();
// document.write("The weight of user is "+string );




//Task 8

// var number = Math.random()*10;
// var floor = Math.floor(number);
// var input = prompt("Enter a number between 1 and 10");
// if(floor === input){
//     alert("Congratulations you have won")
// }
// else{
//     alert("Try again")
// }











//CHAPTER 31-34


//Task 1

// var date = new Date();
// document.write(date)




//Task 2

// var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
// var now   = new Date();
// var thisMonth = months[now.getMonth()]; 
// document.write("Current Month : "+thisMonth)



//Task 3

// var da = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var date = new Date();
// var day = da[date.getDay()];
// document.write("Today is "+day)




//Task 4

// var da = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var date = new Date();
// var day = da[date.getDay()];
// if(day === 'Sat' || 'Sun'){
//     alert("Its Fun day");
// }
// else{
//     alert(day);
//     }




//Task 5

// var date = new Date();
// var da = date.getUTCDate()

// if(da<15){
//     alert("First fifteen days of the Month")
// }
// else{
//     alert("Last fifteen days of the Month")
// }




//Task 6

// var date = new Date();
// document.write(date+"<br>")
// var mili = date.getTime();
// document.write("Elapsed miliseconds since January 1,1970: "+mili+"<br>")
// var minut = mili/1000;
// document.write("Elapsed minutes since January 1,1970: "+minut)




//Task 7

// var date = new Date();
// var time = date.getHours();
// if(time<12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }





//Task 8

// var month = 0; 
// var date = 1;
// var d = new Date(2020, month + 11, date + 30);
// alert("Last Date: "+d); 




//Task 9

// var d = new Date(2020, 3, 25);
// var ramadanDate = d.getTime();
// var n = new Date();
// var today = n.getTime();
// var diff = today - ramadanDate;
// var difference = Math.floor(diff/(1000 * 3600 * 24));
// document.write(difference+" days have passed sice 1st Ramadan 2020")





//Task 10

// var d = new Date(2020, 0, 1);

// var ramadanDate = d.getTime();
// var n = new Date();
// var today = n.getTime();
// var diff = today - ramadanDate;
// var difference = Math.floor(diff/(1000 * 60 ));
// document.write(difference+" seconds had passed since beginning of 2020")




//Task 11

// var date = new Date();
// document.write("Current date: "+date+"<br>");
//  date.setHours(date.getHours()-1);
// document.write("1 hour ago it was, "+date);





//Task 12

// var date = new Date();
// document.write("Current date: "+date+"<br>");
// date.setFullYear(date.getFullYear()-100)
// document.write("100 years back it was, "+date);




//Task 14

// var name = prompt("Enter customer name");
// var month = prompt("Enter month ");
// var unit = prompt("Enter number of units");
// var charges = prompt("Enter charges per unit")
//  var netAmount = unit*charges;
//  var surcharge = 350;
//  var afterDuedate = unit*charges+surcharge;
//   document.write("Customer name : "+name + "<br>")
//   document.write("Month : "+month + "<br>")
//   document.write("Number of Units : "+unit + "<br>")
//   document.write("Charges per Units : "+charges + "<br>")
//   document.write("Net Amount payable (within Due Date) : "+netAmount + "<br>")
//   document.write("Late payment surcharge : "+surcharge + "<br>")
//   document.write("Gross amount payable (after Due Date) : "+afterDuedate)
  
  
  








//CHAPTER 35-38



//Task 1

// function date(){
//     var d= new Date();
//     document.write(d)
// }
// date();




//Task 2

// function greet(){
//     var first = prompt("Enter your first name");
//     var last = prompt("Enter your last name");
//     alert("Welcom "+first+last)
// }
// greet();




//Task 3

// var num1  = prompt("Enter first number");
// var num2 = prompt("Enter second number");

// function add(one,two){
//  var z = (+one) + (+two);
//  return z;
// }
// var x = add(num1,num2);
// document.write(x)




//Task 4

// var val1 = prompt("Enter first value");
// var val2 = prompt("Enter second value");
// var op = prompt("Enter operator");

// function calc(num1,operator,num2){
// if(operator === '+'){
//     alert((+num1)+(+num2))
// }
// else if(operator === '-'){
//     alert(num1-num2)
// }
// else if(operator === '*'){
//     alert(num1*num2)
// }
// else if(operator === '/'){ 
// alert(num1/num2)
// }
// }

// calc(val1,op,val2);







//Task 5

// function square(x){
// var z = x*x;
// document.write(z)
// }
// square(3);




//Task 6

// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// }
// var answer = factorial(3)
// document.write(answer);





//Task 7

// var start = prompt("Enter start number");
// var end = prompt("Enter end number ");

// function counting(x,y){
//     for(var i=x;i<=y;i++){
//         document.write(i+"<br>")
//     }
// }
// counting(start,end);





//Task 9

// function area(width,height){
//     var A = width*height;
//     document.write(A)
// }
// var a;
// function area1(f,g){
//   var w = f*g;
//   a=w;
//   document.write(a)
// }
// area(3,3)
// area1(3,4)




//Task 10

// var word = prompt("Enter your name");
// function palindrome(x){
// var check="";
//  for(var i = word.length-1; i>=0; i--){
//          check+=word[i];
//  }
//  if(check===word){
//      document.write(word+" is a palindrome word");
//  }
//  else{
//     document.write(word+" is a NOT a palindrome word");

//  }

// }
// palindrome(word)






//Task 11


// function capitalize_Words(str)
// {
//  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// var z = capitalize_Words('the quick brown fox');
// document.write(z)





//Task 12

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
var z = find_longest_word('Web Development Tutorial');
document.write(z)