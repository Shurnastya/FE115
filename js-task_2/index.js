//Задача 1
let name = prompt('Введите имя'),
    age = prompt('Введите возраст'),
    city = prompt('Введите город'),
    phone = prompt('Введите телефон'),
    email = prompt('Введите почту'),
    company = prompt('Введите компанию');

console.log(`Меня зовут ${name}. Мне ${age} лет. 
Я проживаю в городе ${city} и работаю в компании ${company}. 
Мои контактные данные: ${phone}, ${email}.`);

// Задача 2
let year = (2022 - age);

console.log(`${name} родился(лась) в ${year} году.`);

//Задача 3
let a3 = '123321';
let sum1 = +a3[0] + +a3[1] + +a3[2], sum2 = +a3[3] + +a3[4] + +a3[5];
if ( sum1 == sum2 ) {
    console.log("Да");
} else {
    console.log("Нет");
}

// Задача 4
let a4 = 1;
if (a4 > 0){
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задача 5
let a = 10, b = 2;
console.log("Сумма " + (a+b) + " ,разность " + (a-b) + " ,произведения " + (a*b) + " ,частное " + (a/b) );

//Задача 6
if (a > 2 && a < 11 ){
    console.log("Верно");
} else {
    console.log("Неверно");
}

if (b >= 6 && b < 14 ){
    console.log("Верно");
} else {
    console.log("Неверно");
}