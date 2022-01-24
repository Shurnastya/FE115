//Задача 1.
console.log('Задача 1.');

let arr = [1, 2, 3, 4, 5];
arr1 = arr.slice(3,5);
console.log(arr1);

//Задача 2.
console.log('Задача 2.');

let arr2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
arr2.splice(2,1);
arr2.splice(3,1);
arr2.splice(2,0, "Pear");
arr2.splice(4,0, "Pear");
console.log(arr2);

//Задача 3.
console.log('Задача 3.');

let arr3 = [6, 2, 7, 4, 5];
let num3 = 1;
let result3 = arr3.reduce(function(sum, elem) {
	if (sum > 10) {
		console.log(num3);
		return;
	} else {
		num3++;
		return sum + elem;
	}
}); 

//Задача 4.
console.log('Задача 4.');

let arr4 = ["rachel", "joe", "ben", "ross", "marcel"];

let result4 = arr4.map(word => { 
    let newWord = word[0].toUpperCase() + word.slice(1); 
    return newWord;
});

console.log(result4);

//Задача 5.
console.log('Задача 5.');

let arr5 = [5, 6, 7, 8, 9];
let newArr5 = [];
arr5.forEach(function(elem) {
	newArr5.push(elem * elem);
});
console.log(newArr5);

//Задача 6.
console.log('Задача 6.');

let arr6 = [1, -1, 2, -2, 3];

let negativeArr = arr6.filter(function(number) {
  return number < 0;
});

console.log(negativeArr);

//Задача 7.
console.log('Задача 7.');

let arr7 = ['banana', 'apple', 'mango', 'orange', 'cherry'];

function func(elem){
  return elem.length > 5;
};

let newArr7 = arr7.filter(func);
console.log(newArr7);

//Задача 8.
console.log('Задача 8.');

let arr8 = [8, 5, 3, 2, 5];

let sum = arr.reduce(function(a, b) { 
    return a + b;
});
let multiplication = arr.reduce(function(a, b) { 
    return a * b;
});

console.log('Сумма: '+sum + ', ' + ' Произведение: ' + multiplication);

//Задача 9.
console.log('Задача 9.');

let arr9 = [121, -2, 49, 0, 81, -5, 25, -11];

function func(elem){
    return elem > 0
};

let positiveArr = arr9.filter(func);

let result9 = positiveArr.map(function(elem) {
	return Math.sqrt(elem);
});

console.log(result9); 

//Задача 10.
console.log('Задача 10.');

let arr10 = [5, 10, 15, 20];
let newArr10 = arr10.reduce(function(sum, elem) {
	return sum + elem;
});
console.log(newArr10);

//Задача 11.
console.log('Задача 11.');
//1.fill() - заполняет все элементы массива от начального до конечного индексов одним значением
let Array1 = [1, 2, 3, 4];

// Заполняет значением 0 от индекса 2 до 4
console.log(Array1.fill(0, 2, 4)); //[1, 2, 0, 0]

// Заполняет значением 5 начиная с первого индекса
console.log(Array1.fill(5, 1)); //[1, 5, 5, 5]

// Заполняет все значения 6
console.log(Array1.fill(6)); //[6, 6, 6, 6]

//2.includes() - определяет, содержит ли массив определённый элемент,
//возвращая в зависимости от этого true или false
let Array2 = [1, 2, 3];

console.log(Array2.includes(2)); //true

let pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat')); //true
console.log(pets.includes('at')); //false

//3.flatMap() - преобразует полученный результат в новый массив, это идентично map() функции
let Array3 = [1, 2, 3, 4];
console.log(Array3.flatMap(x => [x * 2])); // [2, 4, 6, 8]

//4.some() - возвращает true если есть совпадение по условию
let array4 = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log(array4.some(isPositive));// true, есть хоть одно положительное

//5.every() - возвращает false, если все элементы не совпадают с условием
let Array5 = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

console.log(Array5.every(isPositive) ); // false, не все положительные

//6.flat() - делает новый массив с объединёнными в него подмассивами/удаляет пустоту в массивах.
let example6 = [1, 2, [3, 4]];
console.log(example6.flat());

let delete6 = [1, 2, , 4, 5];
console.log(delete6.flat());

//7.findIndex() - возвращает значение индекса элемента в массиве, который соответствует условию в переданной функции
let Array7 = [1, -2, 5, -4];

function checkNumber( currentValue ) {
  return currentValue == 5;
}

console.log(Array7.findIndex(checkNumber));

//Задача 12.
console.log('Задача 12.');

let userName = 'Иван';
    surName = 'Петров';
    age = '17';

function showMessage() {
  let message = 'Привет, ' + userName + ' ' + surName + ' с возрастом ' + age;
  console.log(message);
}

showMessage();

//Задача 13.
console.log('Задача 13.');
let myFunc13 = function(a, b, c){
  return (a - b) / c;
};
console.log(myFunc13(15,5,2));

//Задача 14.
console.log('Задача 14.');

//Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
let myFunc14 = function(num){
  return num * num * num;
};

console.log(myFunc14(2));

//Задача 15.
console.log('Задача 15.');

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  };
console.log(min(5,8));

function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  };
console.log(max(5,8));

//Задача 16.
console.log('Задача 16.');

let myFunc16=(new Date()).getHours();
let name = 'Анастасия';
if (myFunc16 > 6 && myFunc16 < 12) console.log('Доброе утро ' + name); 
if (myFunc16 > 12 && myFunc16 < 18) console.log('Добрый день ' + name); 
if (myFunc16 > 18 && myFunc16 < 22) console.log('Добрый вечер ' + name);
if (myFunc16 > 22 || myFunc16 < 5) console.log('Доброй ночи ' + name);