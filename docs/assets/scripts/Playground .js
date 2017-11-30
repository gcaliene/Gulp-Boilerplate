
const $ = require('jquery');
//const Person = require('./modules/Person'); //require is not defined in the browser so we have to leverage "webpack"
import Person from './modules/Person'; //this is the es6 way to import a module

class Adult extends Person { //Adult class inherits everything from Person Class
  payTaxes() {
    console.log(this.name + " now owes taxes");
  }
}



var john = new Person("John Doe", 'Blue'); //new is an identifier to create a new object.
john.greet();

var jane = new Adult("Jane Smith", "orange"); //new is an identifier to create a new object.
jane.greet();
jane.payTaxes();




//
//
// var John = {
//   name: "John Doe",
//   favColor: "Blue",
//   greet: () => {
//     console.log(`Helo, my name is ${John.name} and my favorite color is ${John.favColor}.`);
//   }
// }
//
// //when a function belongs to an object it becomes a method.
//
// John.greet();+
