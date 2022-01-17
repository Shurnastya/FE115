// Задание 1
let arr1 = ['1', '2', '3', '4','5'];
for (let i = 0; i < arr1.length; i++) {
	document.write(arr1[i] + '<br>');
}

// Задание 2
function SummPositive( numbers ) {
    let negatives = [];
    let sum = 0;
  
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] < -3 && [i] > -10) {
        negatives.push(numbers[i]);
      }
      else{
        sum += numbers[i];
      }
    }

    document.write(negatives + '<br>');
  
    return sum;
}

var sum_result = SummPositive( [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7] );

// Задание 3
let i = 23;
    for(i = 23; i <= 57; i++){
        console.log(i);
    }

i = 23;
    while(i <= 57){
        console.log(i);
        i ++ ;
    }

let result = 0;
    for (i=23; i<=57; i++){
        result = result + i;
    }
console.log(result);

//Задание 4
let arr4 = ['10', '20', '30', '50', '235', '3000'];
console.log(arr4.filter(num => ['1','2','5'].includes(num.toString()[0])));

//Задание 5
let arr5 = ['пн', 'вт', 'ср', 'чт', 'пт','сб', 'вс'];
 
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == 'сб' || arr5[i] == 'вс') {
        document.write('<b>' + arr5[i] + '<b>' + ' ');
    } else {
        document.write(arr5[i] + ' ');
    }
 
};
//Задание 6
let colors = ['green', 'blue', 'red', 'yellow'];
let lastItem = colors[colors.length - 1];
console.log('Последний элемент массива: ' + (lastItem));

//Задание 7
let numbers = [];
  
while (true) {

    numbers.sort(function(a, b) {
        return a - b;
    });

    let value = prompt("Введите число", 0);
  
    if (value === "" || value === null || !isFinite(value)) break;
  
    numbers.push(+value);
}

document.write('<br>' + numbers + '<br>');

//Задание 8
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
arr8.reverse();
console.log(arr8);

//Задание 9
let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let empties = arr9.length - arr9.filter(function(x){ return true }).length;
console.log('Колличество пустых элементов в массиве: ' + (empties));

//Задание 10
function myFunction (arr){
    const first = arr.indexOf(0)+1,
          last = arr.lastIndexOf(0);
    return arr.splice(first, last-first).reduce((a, b)=>a+b, 0)
  }

let a = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let b = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
console.log(myFunction(a));
console.log(myFunction(b));

//Задание 11
let n = "&nbsp"
for (let i = 0; i < 5; i++) {
  for (let k = 5; k > i - 1; k--) {
    document.write(n, n)
  }
  for (let j = 0; j < i + 1; j++) {
    document.write('^', n, n)
  }
  document.write('<br>')
}