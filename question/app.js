/*---Q1---*/
console.log('～Section5基礎問題～\n\nQ1');
let nickname = 'すずきちゃん';
let age = 18;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + 'です。\n\n');

/*---Q2---*/
console.log('Q2');
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let languagesText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。\n\n`;
console.log(languagesText);

/*---Q3---*/
console.log('Q3');
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);
console.log('\n');

/*---Q4---*/
console.log('Q4');

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1] + '\n\n');

/*---Q5---*/
console.log('Q5');
let ageave = (playerList[0].age + playerList[1].age + playerList[2].age) / playerList.length;
console.log(ageave);
console.log('(' + playerList[0].age + '+' + playerList[1].age + '+' + playerList[2].age + ')' + '/' + playerList.length + '\n\n');

/*---Q6---*/
console.log('Q6');
function sayHello(){
  console.log('Hello');
}
sayHello();

function sayWorld(say){
  say();
}

sayWorld(function(){
  console.log('World\n\n');
});

/*---Q7---*/
console.log('Q7');
user.birthday = '2000-09-27';
user.sayHello = function(){
  console.log('Hello!\n\n');
}

console.log(user.birthday);
user.sayHello();

/*---Q8---*/
console.log('Q8');
let calc = {};
calc.add = function(x, y){
  let addResult = x + y;
  console.log('add (' + x + ', ' + y + ')');
  console.log(addResult);
}
calc.subtract = function(x, y){
  let subtractResult = x - y;
  console.log('subtract (' + x + ', ' + y + ')');
  console.log(subtractResult);
}
calc.multiply = function(x, y){
  let multiplyResult = x * y;
  console.log('multiply (' + x + ', ' + y + ')');
  console.log(multiplyResult);
}
calc.divide = function(x, y){
  let divideResult = x / y;
  console.log('divide (' + x + ', ' + y + ')');
  console.log(divideResult);
}

calc.add(3, 4);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(10, 2);
console.log('\n');


/*---Q9---*/
console.log('Q9');
let xBasic = 5;
let yBasic = 3;
function remainder(x, y){
  return x % y;
}

console.log(' ' + xBasic + ' を' + ' ' + yBasic + ' で割った余りは' + ' ' + remainder(xBasic, yBasic) + ' です。\n\n');

/*---Q10---*/
console.log('Q10');
console.log('app.js内に記載\n\n\n');
// function foo() {
//   let x = 1;
// }
// console.log(x);
//変数xは関数fooの中で宣言されている為、変数xの"スコープ"は関数fooの中のみとなっている事から、
//コンソールで呼び出そうとした際、変数xが"参照"できない状態となっている。

console.log('-------------------------------------------------------')

/*---Q1---*/
console.log('～Section6応用問題～\n\nQ1');

let randomFloor = Math.floor(Math.random() * 10);
console.log(randomFloor);
console.log('\n');

/*---Q2---*/
console.log('Q2');
window.setTimeout(say, 3000);
function say(){
  console.log('Hello World!\n\n');
}


/*---Q4---*/
console.log('Q4');
let count = 100; 
let numbers = [];
for (i = 0; i < count; i++){
  numbers[i] = i;
}
console.log(numbers);


/*---Q5---*/
console.log('Q5');
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (i = 0; i < mixed.length; i++){
  if(typeof mixed[i] === "number" && mixed[i] % 2 === 0){
     console.log('even');
   } else if(typeof mixed[i] === "number" && mixed[i] % 2 !== 0){
     console.log('odd');
   } else {
     console.log('not number');
  }
}


console.log('\n');
/*---Q3---*/
console.log('Q3');
let num = -1;
console.log('num = ' + num);
if(num > 0){
  console.log('num is greater than 0');
} else if(num < 0){
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}




