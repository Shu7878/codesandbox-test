import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// function func1(str) {
//   return str;
// }

// const func2 = function (str) {
//   return str;
// };

// const func3 = (str) => {
//   return str;
// };

// const plusNumber = (firstNum, secondNum) => firstNum + secondNum;

// console.log(plusNumber(1, 4));

// const myProfile = {
//   name: "sagara",
//   age: 29,
// };

// const { name, age } = myProfile;

// const message = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message);

// const arry1 = [1, 2];

// console.log(arry1);
// console.log(...arry1);
// const sumFunc = (num1, num2) => num1 + num2;
// console.log(sumFunc(...arry1));

// const arry2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arry3] = arry2;
// console.log(num1);
// console.log(num2);
// console.log(arry3);

// const arry4 = [10, 20];
// const arry5 = [30, 40];

// const arry6 = [...arry4];
// const arry7 = [...arry4, ...arry5];
// console.log(arry6);
// console.log(arry7);

const nameArray = ["田中真一", "山田はじめ", "斎藤啓介"];

// const nameArray3 =
nameArray
  .filter((name) => name.length < 5)
  .map((name, index) => {
    console.log(`${index + 1}番目の苗字は${name}さんです`);
  });
// const nameArray2 = nameArray.map((name) => {
//   return name;
// });
// console.log(nameArray2);
// nameArray.map((name) => console.log(name));

// const numArray = [1, 2, 3, 4, 5];
// const numArray2 = numArray
//   .filter((num) => {
//     return num % 2 === 1;
//   })
//   .map((num) => console.log(num));
// console.log(numArray2);
