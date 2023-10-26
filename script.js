// // Question No1 How do you create an empty JavaScript object? 
//* Equal is must //

// var person = {
// };
// console.log(person);

// out put is {}

//Question No2  Write a JavaScript program to create an object with properties and methods.
// Create an object called "person" with properties "name" and "age." and 
// also create a function into that object call IntrouduceYou 
// take a person object as a parameter and logs a massage to the console.?
//  *This Is A Kind Of Key Word In Java Script 

// var person = {
//     name: "Kajuran",
//     age: 23,
//    introduceYou: function(){console.log("Hello, my name is " + this.name);}
// }
// person.introduceYou();

// Out Put Is Hello, my name is Kajuran

// Question No3 Create a function into that Object called greetStudent 
// that takes a student object as a parameter and logs a greeting message to the console. 
// The message should be like this 'Hello + person name + Welcome to the Coding School'
//* return also key word 

// var person = { 
//         name: "kajuran",
//         greetstudent: function()
//         {console.log ("Hello + this.name")}
//      }
//      function greet(greetstudent) {
//         return "Hello "+person.name+" welcome to the codig school"
//     }
//     console.log(greet("greetstudent"));
// Out Put Is Hello kajuran welcome to the codig school


// Question No4 
//Write a JavaScript program to access object properties
//  using dot notation and bracket notation.

// var person = {
//     name: "Kajuran",
//     age: 23,
// };

// // Using dot notation
// console.log("Name: " + person.name);
// console.log("age: " + person.age);

//Using bracket notation
// console.log("Name: " + person["name"]);
// console.log("age: " + person["age"]);


// Question No5
// Write a JavaScript program to add a new property to an existing object.
// Add a new property email with the value "john@example.com" to the person object

// var person = {
//     name: "Kajuran",
//     age: 23,
// };
// person.email = "john@example.com";
// console.log(person);


//Question No6 
//Write a JavaScript program to remove a property from an object.

// var person = {
//     name: "Kajuran",
//     age: 23,
// };
// delete person.email;
// console.log(person);


//Question No7
//Write a JavaScript program to check whether a property exists in an object.

// var person = {
//     name: "Kajuran",
//     age: 23,
//     email: "john@example.com"
// };
// // Check if "email" property exists

// if (person.alre("email")) {
//     console.log("The 'email' property exists in the object.");
// } else {
//     console.log("The 'email' property do not exist in the object.");
// }

// var person = {
//     name: "Kajuran",
//     age: 23,
//     email: "john@example.com"
// };

// // Check if "email" property is defined
// if (person.email !== undefined) {
//     console.log("The 'email' property exists in the object.");
// } else {
//     console.log("The 'email' property does not exist in the object.");
// }



// Question No8 Create two objects, student and course, and merge them into a new object named studentCourse.

// var student = {
//     name: "kajuran",
//     age: 23
// };

// var course = {
//     courseName: "Maths",
//     courseCode: "Bio"
// };

// var studentCourse = Object.assign({}, student, course);

// console.log(studentCourse);

//Question No9

// var person = {
//     name: "kajuran",
//     age: 23
// };

// if (person.hasOwnProperty("address")) 
// {
//     console.log("Address is Neervely");
// } 
// else {
//     console.log("Address not found");
// }

//Question 10
// Create an object book with properties for title, author, and year, and then convert it into a JSON string.

// var book = {
//     title: "A History of Violence",
//     author: "Lokesh Kanakaraj",
//     year: 1986
// };

// var bookJSON = JSON.stringify(book);

// console.log(bookJSON);


// Question 11
// Create an array of objects called students. Each object in the array should have the following properties:
// name: string
// age: number
// gpa: number
































