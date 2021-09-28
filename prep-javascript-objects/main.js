var person = {
  firstName: 'Gustavo', lastName: 'Ayala', hobby: 'Soccer'
};

console.log(person);

var fullName = `The person's name is: ${person.firstName} ${person.lastName}`;

console.log(fullName);

person.job = 'Jerk';

console.log(`The person's current job is: ${person.job}`);

person.previousJob = 'Accountant';

console.log(`The person's previous job is: ${person.previousJob}`);

console.log(person)
;
