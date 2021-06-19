if (2 == "2") {
	console.log('true')
} else {
	console.log('false')
}


let message = (92 < '104' && 100 > 23) ? 'yes' : 'no';
console.log(message)

let long;
if (92 < '104' && 100 > 23) {
	console.log('yes')
} else {
	console.log('no')
}


let wind = 5
while (wind < 6) {
	console.log(wind);
	wind++;
}

for (var i = -2; i < 2; i++) {
	console.log(i);
}


for (rot = 7; rot > 5; rot--) {
	console.log(rot)
}


let goal = 99
for (; goal > 1; goal--) {
	console.log(goal);
	if (goal == 97) break;
}

let chek = 1
for (; chek < 5; chek++) {
	if (chek == 3) continue;
	console.log(chek);
}

let tor = 0
for (; ; tor++) {
	if (tor == 5) continue;
	if (tor == 6) break;
	console.log(tor)
}



let num = 0;
while (num < 3) {
	console.log(num);
	num++;
}
console.log(`Число: ${num}`)

firstFor: for (let number = 0; number < 2; number++) {
	for (let size = 0; size < 3; size++) {
		if (size == 1) {
			break firstFor;
		}
		console.log(size);
	}
}

function showMessage() {
	console.log('message');
}
showMessage();

let globalWar = "Я глобальная переменная";
function sumOne() {
	let numOne, numTwo;

	function getNumOne(){
		numOne = 1;
		console.log(globalWar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne()
	getNumTwo()
	numSumm = numOne + numTwo;
	console.log(globalWar);
}
console.log(globalWar)

sumOne()




function summer(one, two, more, less) {
	let summerOne = one + two;

	if (summerOne > 4) {
		more();
	} else {
		less();
	}
}

function showMess() {
	console.log('Больше четырех');
}
function lookMess() {
	console.log('Меньше четырех');
}
summer(2, 3, showMess, lookMess);


let getMessahe = (name, text) => {
	let mesage = name + ', ' + text + '!';
	return mesage;
};
console.log(getMessahe('denis', 'hello'));


/*
function watch(name, text) {
	console.log(`${name}, ${text}`)
}
setTimeout(watch, 3000, 'denis', 'hello');
/*setInterval(watch, 3000, 'denis', 'hello');*/


/*
function watchh() {
	console.log(`kolya`)
}
setTimeout(watchh, 0);
console.log(`koldya`)

'use strict'
if (2 > 1) {
	function showMessag(){
		console.log('mdessage')
	}
}
showMessag();
*/


let firstName = "dima love ";
let object = {
	name: "ivan",
	age: 39,
	[firstName + "dick"]: true,
	adress: {
		city: "odessa",
		street: "obke",
	}
}
for (let rip in object) {
	console.log(rip);
	console.log(object[rip]);
}

console.log(object.name)
console.log(object)
console.log(object["dima love dick"]);



function smell(age, name) {
	return {
		name: name,
		age: age,
	}
}
let greezy = smell(12, "eblan");
console.log(greezy)



let water = {
	name: "rima",
	age: 13,
}
let roma = Object.assign({}, water);
roma.age = 15;

console.log(roma)
console.log(water)



let jopa = {
	name: "dimaaa",
	age: 35,
	adress: {
		street: "goam",
	}
}
if ("name" in jopa) {
	console.log(jopa.name)
}



let adresss = {
	name: "denis",
	age: 18,
	adress: {
		home: 19,
		city: "odessa",
		street: "kishinivska",
	},
	showWrite() {
		console.log(`${adresss.name}, ${adresss.age} years, number ${adresss.adress.home}, ${adresss.adress.city}, ${adresss.adress.street}`)
	}
}
adresss.showWrite();




function UserEblan(name) {
	this.name = name,
	this.age = 14
}
console.log(new UserEblan("Kurva"));
console.log(new UserEblan("Olga"));

let userDick = {
	name: "vasya",
	age: 30,
}

userDick.name = "lena";
delete userDick.name;
console.log(userDick)



console.log(Math.max(10, 58, 39. -150,0))

let eblan = 58.856;
console.log(parseInt(eblan))

let tupoy = "58.856px";
console.log(parseFloat(tupoy))



let denis = 1.005 + Number.EPSILON;
let ropa = Math.round(denis * 100) / 100;
console.log(ropa);


let text = "фрилансер";
console.log(text.toUpperCase());




let row = ['ivan', 'roman', 'kate']
row.pop();
console.log(row)


let nimbers = [4, 56, 2, 12];
console.log(nimbers.sort());
console.log(nimbers.sort((a, b) => a - b))

function bills(a, b) {
	console.log(`Сравниваем: ${a} и ${b}`);
	if (a > b) return 1;
	if (a == b) return 0;
	if (a < b) return -1;
}
console.log(nimbers.sort(bills))



let rows = ['ivan', 'roman', 'kate'];

rows.forEach((item, index, array) => {
	console.log(`${item} находится нa ${index} позиции ${array}`)
})

let clock = ['ivan', 'roman', 'kate'];
let big = clock;
big.push('lena')
console.log(clock.length)



let users = ['ivan', 'roman',];
users.push('lena');
users.splice(0, 1, 'roma');
users.unshift('masha', 'pasha')
let wiht = users.splice(1, 1)
console.log(users)
console.log(wiht)



let glock = 'ivan,roman,kate';
let deagle = glock.split(',');
console.log(deagle);



let goals = [46, 51, 35]
let numbers = goals.reduce(function (previousValue, item, index, array) {
	console.log(previousValue)
	console.log()
})
console.log(goals.sort((a, b) => a -b))