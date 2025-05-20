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

console.log(playerList[1].favorites[1]);




