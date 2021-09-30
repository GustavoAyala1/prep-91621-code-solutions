function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log(convertHoursToMinutes(2));

function getGreeting(name) {
  return `Hello ${name}`;
}
console.log(getGreeting('Gus'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log(multiplyAndDivideBy5(10, 5));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
console.log(subtractTwoNumbers(35, 5));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName('Gus', 'Ayala'));

function cube(number) {
  return number * number * number;
}
console.log(cube(5))
;
