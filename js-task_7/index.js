//Задача 1.
console.log('Задача 1.');

let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/g, '!'));

//Задача 2.
console.log('Задача 2.');

let str2 = '2025-12-31';
let arr2 = str2.split('-');
let newStr2 = arr2[2] + '/' + arr2[1] + '/'+arr2[0];
console.log(newStr2);

//Задача 3.
console.log('Задача 3.');

let str3 = "Я учу javascript!";

console.log(str3.substr(1, 4));
console.log(str3.substr(5,11));

console.log(str3.substring(2, 5));
console.log(str3.substring(5, 16));

console.log(str3.slice(1, 5));
console.log(str3.slice(5,-1));

//Задача 4.
console.log('Задача 4.');

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum4 = 0;
for (let i = 0; i < arr4.length; i++) {
    sum4 += Math.pow(arr4[i], 3);
}
console.log(Math.sqrt(sum4));

//Задача 5.
console.log('Задача 5.');

let a = 3;
let b = 5;
let с = Math.abs(a - b);
console.log(с);

//let a = 6;
//let b = 1;
//let с = Math.abs(a - b);
//console.log(с);

//Задача 6.
console.log('Задача 6.');

let date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

//Задача 7.
console.log('Задача 7.');

let str7 = 'aa aba abba abbba abca abea';
let reg7 = /ab{1,}a/gi; 
console.log(str7.match(reg7));