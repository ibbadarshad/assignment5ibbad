                    // CHAPTER 6-9

// TASK 1
// var a = 10;
// document.write("the value of a is " + a + "<br>")
// a = ++a;
// document.write("now the value of ++a is " + a + "<br>")
// document.write("the value of a++ is " + a++ + "<br>")
// document.write("now the value of a++ is " + a + "<br>")
// document.write("the value of --a is " + --a + "<br>")
// document.write("now the value of --a is " + a + "<br>")
// document.write("the value of a-- is " + a-- + "<br>")
// document.write("now the value of a-- is " + a)

// TASK 2
// var a = 2,
//     b = 1;

// var result = --a - --b + ++b + b--;
// document.write(result + "<br>")

// document.write(--a + "<br>")
// document.write(--a - --b + "<br>")
// document.write(--a - --b + ++b + "<br>")
// document.write(--a - --b + b-- + "<br>")
// document.write(a , b)

// TASK 3
// var  a = prompt("enter your name:" )
// document.write("welcome to the website SIR " + a)

// TASK 4
// var number = +prompt("enter the number:")
// if (number === 0){
//     number = 5;
// }
// else{
//     number = number
// }
// for(var i = 1 ; i <= 10 ; i++){
//     document.write( number + "x" + i + "=" + number*i + "<br>")
// }

// TASK 5
// var name1 = "English",
//     name2 = "Math",
//     name3 = "Urdu";

// var total = 100;
// var marks1 = +prompt("enter you marks:");
// var   marks2 = +prompt("enter you marks:");
//  var   marks3 = +prompt("enter you marks:");
//  var totalall = total + total + total;
//  var marksall = marks1 + marks2 + marks3;

//  var p_english = (marks1 / total) * 100; 
//  var p_maths = (marks2 / total) * 100; 
//  var p_urdu = (marks3 / total) * 100; 
//  var p_all = (marksall / totalall)* 100;

//  document.write("<table>" + "<tr><td>" + "Subject " + "</td>" + "<td>"  +   "total marks "+ "</td>" + "<td>"  +   "Obtained marks " + "</td" + "<td>"  + "Percentage " + "</td></tr>" 
//     +  "<tr><td> " + "ENGLISH" + "</td>" + "<td>" + total +"------------"  +"</td"+ "<td>" + marks1  +"</td>" + "<td>" + "---------------" + p_english 
//     + "%"+ "</td> </tr>" + "<tr> <td>" + "MATH" + "</td>"+ "<td>" + total + "------------" + "</td" +
//     "<td>" + marks2 + "</td>" + "<td>" + "--------------" + p_maths + "%" + "</td> </tr>" 
//     + "<tr> <td>" + "URDU" + "</td>"+ "<td>" + total + "------------" + "</td" +
//     "<td>" + marks3 + "</td>" + "<td>" + "--------------" + p_urdu + "%" + "</td> </tr>" + 
//     "<tr> <td>" + "     " + "</td>"+ "<td>" + totalall + "------------" + "</td" +
//     "<td>" + marksall + "</td>" + "<td>" + "--------------" + p_all + "%" + "</td> </tr>" +"</table>")

 
                       //  CHAPTER 9-11
                
// TASK 1
// var city = prompt(" enter your city ");

// if (city === "karachi"){
//     document.write("welcome to the city of lights")
// }

// TASK 2
// var gender = prompt("enter your gender:")

// if ( gender === "male" ){
//     document.write("good morning sir")
// }
// else if (gender === "female"){
//     document.write("good morning maam")
// }
// else{
//     document.write("error")
// }

// TASK 3

// var signal = prompt("enter signal:")

// if ( signal === "red" ){
//          document.write("must stop")
//      }
//      else if (signal === "yellow"){
//          document.write("ready to move")
//      }
//      else if ( signal === "green"){
//          document.write("move now")
//      }
//      else{
//          document.write("error")
//      }

// TASK 4
 
// var fuel =prompt("enter your car fuel:")

// if (fuel < 0.25){
//     document.write("you need to refill your tank")
// }
// else{
//     document.write("fine keep driving")
// }

// TASK 5
// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 


// var b = 82; 
// if (b++ === 83){ 
//     alert("given condition for variable b is true"); 
// }


// var c = 12;
//  if (c++ === 13){ 
//      alert("condition 1 is true"); 
//     } 
//     if (c === 13){
//          alert("condition 2 is true"); 
//         } 
//         if (++c < 14){ 
//             alert("condition 3 is true"); 
//         } 
//         if(c === 14){ 
//             alert("condition 4 is true"); 
//         } 




// var materialCost = 20000; 
//  laborCost = 2000; 
//  var totalCost = materialCost + laborCost; 
//  if (totalCost === laborCost + materialCost){
//       alert("The cost equals"); 
//     } 
 

// if (true){ 
//     alert("True");
//  } 
//  if (false){ 
//      alert("False"); 
//     } 
 
// TASK 6

// var marksobtained = +prompt("enter marks obtained:");
// var totalmarks = +prompt("enter total marks:");
// var percentage = (marksobtained / totalmarks) * 100 ;
// document.write("Marks obtained " + marksobtained + "<br>")
// document.write("Total marks " + totalmarks + "<br>")
// document.write("percentage is " + percentage + "<br>")
// if( percentage >= 80  ){
//     document.write("grade: A-one" + "<br> " + " remarks: excellent")

// }
// else if( percentage >= 70 ){
//     document.write("grade : A" + "<br>" + "remarks: good")
// }
// else if( percentage >= 60 ){
//     document.write("grade : B" + "<br>" + "remarks: need some improvement")
// }
// else if( percentage < 60 ){
//     document.write("grade : fail" + "<br>" + "remarks: sorry")
// }
// else {
//     document.write("fail")

// }



//q7

// var num=+prompt('enter a number')
// if(num===4){
//     document.write('Bingo!correct answer')
// }
// else if(num==5){
//     document.write('close enough')
// }
// else(
//     document.write('try again')
// )


//q8

// var num=+prompt('enter a number')
// var rem=num%3
// if (rem==0){
//     document.write('this number is divisible by 3')
// }
// else{
//     document.write('ths number is not divisible by 3')
// }





//q9


// var num=+prompt('enter a number')
//  var rem=num%2
// if (rem==0){
//     document.write('this is an even number')
// }
// else{
//     document.write('this is an odd number')
// }











 