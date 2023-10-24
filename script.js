// complete this js code
function Person(name, age) {
	this.name = name;
   this.age=age;

   Person.prototype.greet = function ()
   {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
   }
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age); // if we directlycall person() , without any object it will direct to window object also we cant use this.person() as it permanently attached function.

   this.jobTitle= jobTitle;

   // Employee.prototype.__proto__=Person.prototype;
	Employee.prototype = Object.create(Person.prototype);

   Employee.prototype.jobGreet = function ()
   {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
   }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
