// this is single line comment
/*
this is multiline comments
*/
//Data type
//variables - let, const, var
//var --> old way --> should not be used
//let --> normal variable
//const --> for constants
//Primitive value types- String, Number, Boolean, Undefined

// let x = 'Krishna';
// console.log(x);
// console.log(typeof x);

// let x = 5;
// console.log(x);
// console.log(typeof x);

// let x = 5.7;
// console.log(x);
// console.log(typeof x);

// let x = true;
// console.log(x);
// console.log(typeof x);

// let x;
// console.log(x);
// console.log(typeof x);

// let x = null; // null != undefined
// console.log(x);
// console.log(typeof x);

//Reference Types- Arrays, Objects, Functions
// let x = [1, 2, 3];
// console.log(x);
// console.log(typeof x);

// let x = [1, 'Krishna', 3.5, true];
// console.log(x);
// console.log(x[1]);
// console.log(typeof x);

// let x = '5';
// let y = 5;
// console.log(x == y); //when to consider values only
// console.log(x === y); // when to consider values + data type

// let x = {
//   name: 'Krishna',
//   id: 'tekyks',
// };
// console.log(x);
// console.log(typeof x);
// console.log(x.name);
// console.log(x['name']);

// let y = {
//   name: 'Krishna',
//   id: 'tekyks',
// };

// console.log(x == y);
// console.log(x === y);

//way1
// function addition(input1, input2) {
//   return input1 + input2;
// }

// //way2
// let addition2 = function (input1, input2) {
//   return input1 + input2;
// };

// //way3 //ES5/6
// let addition3 = (input1, input2) => input1 + input2;

// //way4
// let addition4 = (input1, input2) => {
//   return input1 + input2;
// };

// let result = addition(5, 6);
// console.log(result);
// console.log(typeof addition);

// let result2 = addition2(5, 6);
// console.log(result2);
// console.log(typeof addition2);

// let result3 = addition3(5, 6);
// console.log(result3);
// console.log(typeof addition3);

//conditional statement
// let x = 7;
// if (x === 5) {
//   console.log('Value is 5');
// } else if (x === 6) {
//   console.log('Value is 6');
// } else {
//   console.log('Value is neither 5 nor 6');
// }

//loop -
// for (let i = 0; i <= 5; i++) { //i++ = i + 1
//   console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

let numbers = [1, 2, 3, 4, 5, 6];

//use case1 - convert this array into double of these numbers [2,4,6,8,10,12]

// let numbers2 = [];
// for (let i = 0; i < numbers.length; i++) {
//   numbers2[i] = numbers[i] * 2;
// }
// console.log(numbers2);

// //JS array --> map function
// let numbers3 = numbers.map((num) => {
//   num = num + 1;
//   return num * 2;
// });
// let numbers4 = numbers.map(function (num) {
//   num = num + 1;
//   return num * 2;
// });
// console.log(numbers3);
// console.log(numbers4);

// //JS filter
// //Use case - find out all the even numbers
// let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

function apiFetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve({ name: 'Krishna', id: 'tekyks' });
      reject('Call got failed');
    }, 5000);
  });
}

// apiFetchUser()
//   .then((user) => console.log('user name: ' + user.name))
//   .catch((error) => console.log(error));

//async-await
async function getUser() {
  try {
    let user = await apiFetchUser();
    console.log('user name: ' + user.name);
  } catch (error) {
    console.log(error);
  }
}

getUser();

console.log('End message');
