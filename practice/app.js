
/*---Section2---*/

//alert('Hello World!');
console.log('Hello World!');
console.log('1つ目の値', '2つ目の値');

let text = 'JavaScriptの練習';
console.log(text);

text = 'JavaScriptをマスターした';
console.log(text);

const constant = 'これは定数です';
// constant = '再代入できません。';



/*文字列型(string 型)*/
console.log('elephant'); // => elephant が出力される
//console.log(elephant); // => Uncaught ReferenceError: elephant is not defined というエラーが出力される

let name = 'ジョニー';
let greet = '私は' + name + '！';
console.log(greet);

let template = 'テンプレートリテラル'; // ※ これは文字列
let templateText = `これが${template}です。
${template}は改行もできます。`; // これはテンプレートリテラル
console.log(templateText);


/*数値型(number 型)*/
let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10'; // 追記
console.log(numTen, strTen); // 値を追加

//加算（足し算）
// let num1 = 25;
// let num2 = 2;
// console.log(num1 + num2);

//減算（引き算）
// let num1 = 25;
// let num2 = 2;
// console.log(num1 - num2); // - に変更

// 乗算（掛け算）
// let num1 = 25;
// let num2 = 2;
// console.log(num1 * num2); // * に変更

//除算（割り算）
let num1 = 25;
let num2 = 2;
console.log(num1 / num2); // / に変更

let number = 5;
number += 3; // number = number + 3と同じ
console.log(number);
number -= 1; // number = number - 1と同じ
console.log(number);
number *= 5; // number = number * 5と同じ
console.log(number);
number /= 7; // number = number / 7と同じ
console.log(number);

let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);

let bigNum = 25;
let smallNum = 2;
// 以下を変更
console.log(bigNum ** smallNum); // 25の2乗なので、25 * 25となり、625が表示される

let stringNum = '25';
let numberNum = 2;
console.log(stringNum + numberNum); // => 252


/*配列型(array 型)*/
let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[2]);
console.log('names[3] => ', names[3]);
console.log('names.length => ', names.length);

//console.log(names);
let empties = []; // 空の配列が変数emptiesに代入されている
console.log(empties);

/*オブジェクト型(object 型)*/
// let John = {
//   name: 'John', // key（キー）: value（バリュー）
//   age: 26,
//   bloodType: 'A',
//   favorite: 'card',
// };

//console.log(John.bloodType); // => A

let Andy = {};
Andy.name = 'Andy';
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';



/*---Section3---*/

// function getArea() {
//   let radius = 2;
//   let circle = radius * radius * 3.14;
//   console.log('円の面積は' + circle + 'です');
// }

//getArea();   // ←これが関数の呼び出し

// function getArea(radius) {
//   let circle = radius * radius * 3.14;
//   console.log('円の面積は' + circle + 'です');
// }

// getArea(5);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;

  console.log('ここはreturnよりも後ろの処理です。');
}

getArea(5);

function define1() { // define1という名前の関数
  return 'This is console in showConsole function!';
}

const define2 = function() { // 名前のない関数（無名関数）を変数define2に代入
  return 'This is console in showConsole function!';
}

// function doFunc(callback) {
//   console.log('doFuncが呼び出されました');//最初に呼び出し
//   callback();//引数に()を付けて呼び出す事でコールバック関数が呼び出せる
// }

// // 以下を追記
// doFunc(function() {
//   console.log('コールバック関数が呼び出されました');
// });

function doFunc(call) {
  console.log('doFuncが呼び出されました');
  call();
}

function output() {
  console.log('コールバック関数が呼び出されました');
}

doFunc(output)  // 名前付きの関数を渡す時は、()を付けずに渡す


let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();



let round = Math.round(2.86); // 四捨五入
console.log('round => ', round);

let ceil = Math.ceil(4.05);   // 切り上げ
console.log('ceil => ', ceil);

let floor = Math.floor(4.98); // 切り下げ
console.log('floor => ', floor);

let random = Math.random(); // 0~1までの乱数の生成
console.log('random => ', random);





/*---Section4---*/

let value1 = true;
let value2 = false;

if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました');

if (false) {
  console.log('trueです！');
}
console.log('処理が終わりました');


let val = 26;
console.log(val >= 20);
console.log(val === '26');
console.log(val == '26');
console.log('hello' === 'world');


let errMsg = '';
// if 文を使った書き方
if (errMsg === '') {
    console.log('ない！');
} else {
    console.log('ある！');
}

// 三項演算子を使った書き方
errMsg === '' ? console.log('ない！') : console.log('ある！');





