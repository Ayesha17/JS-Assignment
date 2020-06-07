// alert("Hello Ayesha!");

// var message = "Error! Please enter a valid password. ";
// alert(message);


// var message = "Welcome to JS Land...\n Happy Coding! ";
// alert(message);

// var message = "Welcome to JS Land...";
// alert(message);

// var message = "Happy Coding!";
// confirm(message);

// var spec = prompt("Your species?", "human");

// var username = "Ayesha";
// var myName;
// myName = "Ayesha Shahid";

// var message;
// message = "Hello World";
// alert(message);


// var name = "Jhone Doe";
// var age = "15 years old";
// alert(name);
// alert(age);
// var course = "Enter your course";
// var y_course = prompt("Your course?", course);
// alert(y_course);


// var pizzaText = ["P", "I", "Z", "Z", "A"];
// var pizza = "";
// var count = 0;
// for (var i = 0; i < 5; i++) {
//     // console.log(pizzaText[i]);
//     for (var j = 0; j < 5; j++) {
//         if (i > 0) {
//             if (j > 0 && j >= count) {
//                 pizza = pizza + pizzaText[j - count];
//             }
//         }
//         else
//             pizza = pizza + pizzaText[j];


//     }
//     count++;

//     pizza = pizza + "\n";
// }
// console.log(pizza);
// alert(pizza);

// var email;
// email = "ayeshashahid91991@gmail.com";
// alert("My email address is " + email);

// var book;
// book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);


// var message = "Yah! I can write HTML content through JavaScript";
// document.write(message);

// alert('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬\n\n');

// var age;
// age = 26;
// alert("I am" + age + "years old");

// var n = localStorage.getItem('on_load_counter');

// if (n === null) {
//     n = 0;
// }
// n++;

// localStorage.setItem("on_load_counter", n);

// nums = n.toString().split('').map(Number);
// for (var i of nums) {
//     alert("You have visited this site " + i + " times");
// }



// var birthYear;
// birthYear = 1994;
// document.write("My birth year is " + birthYear + "\n Data type of my declared variable is number");


// var visitorName = prompt("Visitor Name", "Enter your name");
// var productTitle = prompt("Product Title", "Enter product");
// var quantity = + prompt("Quantity");
// document.write(visitorName + " ordered " + quantity + productTitle + "(s) on XYZ Clothing store");





//----------------------------Chapter 4----------------


// var name, email, password;

// var name, pass, email, phone, city;
// var city Name, -skd, var, alert;



// var text = " <h2>Rules for naming JS variables</h2> <br><br>Variable names can only contain $name, _name, 1name and Name.<br>Variables must begin with a $, _ or 1.<br>Variable names are case sensitive.<br>Variable names should not be JS.";
// document.write(text); 





//---------------------chapter 9 -11 ----------------


//task 1
// var cityName = prompt("Enter a city name");
// if (cityName.toUpperCase() === "Karachi".toUpperCase()) {
//     alert("Welcome to city of lights");
// }


//task 2
// var gender = prompt("Enter your gender");
// if (gender.toUpperCase() === "male".toUpperCase()) {
//     alert("Good Morning Sir");
// } else if (gender.toUpperCase() === "female".toUpperCase()) {
//     {
//         alert("Good Morning Ma’am");
//     }

//task 3
//     var trafficSignal = prompt("Enter color of traffic signal");
//     if (trafficSignal.toUpperCase() === "Red".toUpperCase()) {
//         alert("Must Stop");
//     } else if (trafficSignal.toUpperCase() === "Yellow".toUpperCase()) {
//         alert("Ready to move");
//     } else if (trafficSignal.toUpperCase() === "Green".toUpperCase()) {
//         alert("Move now");
//     }


//task 5
//a
//var a = 4; if (++a === 5) { alert("given condition for variable a is true"); }
//true  ....alert("given condition for variable a is true");

//b
//var b = 82; if (b++ === 83) { alert("given condition for variable b is true"); }
//false

//c
// var c = 12; if (c++ === 13) { alert("condition 1 is true"); } if (c === 13) { alert("condition 2 is true"); } if (++c < 14) { alert("condition 3 is true"); } if (c === 14) { alert("condition 4 is true"); }
//condition 2 is true and condition 4 is true

//d
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
//the cost equals

//e
// if (true) { alert("True"); }
// if (false) {
//     alert("False");
// }
//true


//f
// if ("car" < "cat") { alert("car is smaller than cat"); }
//car is smaller than cat









//---------------------chapter 12 -13----------------


//task 1
// var input = prompt("Input any character");
// var asciCode = input.charCodeAt();
// if (asciCode >= 65 && asciCode <= 90) { alert(input + " is uppercase"); }
// else if (asciCode >= 48 && asciCode <= 57) { alert(input + " is number"); }
// else if (asciCode >= 97 && asciCode <= 122) {
//     alert(input + " is lowercase");
// }


//task 2
// var num1 = +prompt("Enter a number 1");
// var num2 = +prompt("Enter a number 2");
// if (num1 == num2) {
//     alert(num1 + " is equal to " + num2);
// }
// else if (num1 > num2) {
//     alert(num2 + " is less  than " + num1);
// } else {
//     alert(num2 + " is greater than " + num1);
// }


//task 3
// var num = +prompt("Enter a number");
// if (num < 0) {
//     alert(num + " is negative");
// } else if (num == 0) {
//     alert(num + " is zeero");
// }
// else {
//     alert(num + " is positive");
// }


//task 4
// var num = prompt("Enter a character");
// if (num == 'a' || num == 'e' || num == 'i' || num == 'o' || num == 'u') {
//     alert(num + " is vowel. true");
// }
// else {
//     alert("false");
// }


//task 5
// var password = "abc123";
// var cPassword = prompt("Enter a password");
// if (cPassword === "") {
//     alert("Please enter your password");
// }
// else if (cPassword === password) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }


//task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// alert(greeting);


//task 7
// var time = +prompt("Enter a time", "Format is 1900");
// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } else {
//     alert("Good night!");
// }





//-------------------chapter 17 -20---------------
//task 1
//var array=[][];


//task 2
// var array = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// console.log(array[1][3]);

//task 3
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

//task 4
// var number = +prompt("Enter a number to show its multiplication table");
// var lenght = +prompt("Enter length  multiplication table");
// document.write("Multiplication table of " + number + "<br>");
// document.write("Lenght of " + lenght + "<br>");
// for (var i = 1; i <= lenght; i++) {
//     document.write(number + " * " + i + " = " + number * i + "<br>");
// }

//task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");
// }
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }