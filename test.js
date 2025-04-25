console.log("yeet");
/*ONE*/
function calculateArea(width, length) {
  return length * width;
}

let l = 10;
let w = 5;
let a = calculateArea(w, l);

console.log(a);
/*TWO*/
function sumThing(int1, int2) {
  if (int1 === int2) {
    return 3 * int1;
  } else {
    return int1 + int2;
  }
}

let i1 = 2;
let i2 = 8;

let sum = sumThing(i1, i2);
console.log(sum);

/*THREE*/

function IsItFifty(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
}

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

console.log(num1);
console.log(num2);

let fifty = IsItFifty(num1, num2);

console.log(fifty);

/*FIVE*/

function lessthan(number) {
  if (number < 5) {
    return true;
  }
}

let x = Math.floor(Math.random() * 11);

let less = lessthan(x);
let string = "";

if (less) {
  string = "The number is less than five";
} else {
  string = "The number is more than five";
}
console.log(x);

console.log(string);
