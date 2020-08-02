let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truth: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// Prevent 'any'
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// Declare and initialize separately
let words = ["red", "green", "blue"];
let foundWord: boolean;

words.forEach((word) => {
  if (word == "green") foundWord = true;
});

// Variable where type inference does not work
let numbers = [-1, -2, -3];
let numberAboveZero: boolean | number = false;

numbers.forEach((number) => {
  if (number > 0) {
    numberAboveZero = number;
  }
});
