//Question_01:
var x = prompt("Enter City Name: ");
if (x=="Karachi"){
    document.write("Welcome to city of lights:")
}
//Question_2:
var gender = prompt("Enter your gender: ");
gender = gender.toLowerCase();
if (gender === "male"){
    document.write("Good morning Sir!")
}
else if (gender === "female"){
    document.write("Good morning Ma'am!")
}

else {
    document.write("Enter in valid gender");
  }
//Question_3:
var signal_color = promt("Enter color of road signal: ")
gender = gender.toLowerCase();
if (signal_color === "Red" ){
    document.write("Must Stop!")
}
else if (signal_color === "Yellow" ){
    document.write("Ready to move!")
    }
else if (signal_color === "green" ){
    document.write("Move now!")
}
else {
         document.write("Enter invalid signal color");
     }

//Question_4:

var fuel = parseFloat(prompt("Please enter the remaining fuel in litre:"));
if (fuel < 0.25) {
 document.write("Please refill the fuel in your car.");
} 
else {
document.write("You have enough fuel in your car.");
}

//Question_5:
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}

//Question_6:
var sub_1 = +prompt("Enter marks of subject 1 : ");
var sub_2 = +prompt("Enter marks of subject 2 : ");
var sub_3 = +prompt("Enter marks of subject 3 : ");
var Total = +prompt("Enter Total Marks : ");

var marks_obtained = sub_1 + sub_2 + sub_3
var percentage = (sub_1 + sub_2 + sub_3) / Total * 100; 

document.write("Total Marks: " + Total + "<br>");
document.write("Marks obtained: " + marks_obtained + "<br>");
document.write("Percentage: " + percentage + "<br>");
if(percentage >= 80){
    document.write("Grade : A-one <br>")
    document.write("REMARKS: Excellent")
}
 
else if(percentage >= 70){
    document.write("Grade : A <br>")
    document.write("REMARKS: Good")
}

else if(percentage >= 60){
    document.write("Grade : B  <br>")
    document.write("REMARKS: You need to improve")
}

else {
    document.write("Fail  <br>")
    document.write("REMARKS: Sorry")
}
 
//Question_7:
// Generate a random secret number between 1 and 10
var RandomNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess the secret number (between 1 and 10):");
if (userGuess === RandomNumber) {
    document.write("Bingo! Correct answer");
} else if (userGuess === RandomNumber + 1) {
    document.write("Close enough to the correct answer");
} 

//Question_8:
var number = +prompt("Enter a number:");

// Check if the number is divisible by 3
if (number % 3 === 0) {
  document.write(number + " is divisible by 3.");
} 
else {
  document.write(number + " is not divisible by 3.");
}

//Question_9:
// Prompt the user to enter a number
var number = +prompt("Enter a number:");

// Check if the number is even or odd
if (number % 2 === 0) {
  document.write(number + " is an even number");
} 
else {
  document.write(number + " is an odd number");
}

//question_10:

var temperature = +prompt("Enter the temperature:");

// Check the temperature and display the corresponding message
if (temperature > 40) {
 document.write("It is too hot outside.");
} 
else if (temperature > 30) {
    document.write("The Weather today is Normal.");
} 
else if (temperature > 20) {
    document.write("Today’s Weather is cool.");
} 
else if (temperature > 10) {
    document.write("OMG! Today’s weather is so Cool.");
} 
else {
    document.write("The temperature is too low.");
}

//Question_11:
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
  result = firstNumber + secondNumber;
} 
else if (operation === "-") {
  result = firstNumber - secondNumber;
} 
else if (operation === "*") {
  result = firstNumber * secondNumber;
} 
else if (operation === "/") {
  result = firstNumber / secondNumber;
} 
else if (operation === "%") {
  result = firstNumber % secondNumber;
} 
else {
  document.write("Invalid operation entered!");
}
document.write("Result: " + result);
