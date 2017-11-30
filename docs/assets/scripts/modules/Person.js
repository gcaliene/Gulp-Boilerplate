class Person {
  constructor(name, favColor){
    this.name = name;
    this.favColor= favColor;
  }

  greet() { //the value of this. changes on who uses it
    console.log(`Hi there, my name is ${this.name} amd my fave color is ${this.favColor}`);
  }
};

// module.exports = Person; ES5 way
export default Person; // ES6 way
