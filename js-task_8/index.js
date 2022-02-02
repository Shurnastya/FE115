const Car = function(number, brand, engine){

    this.number = number;
    this.brand = brand;
    this.engine = engine;

    this.showName = function(){
        console.log(`
        Number: ${this.number}, 
        Brand: ${this.brand}, 
        Engine: ${this.engine}`)
    }

    this.get = function () {

        if (confirm('Включить двигатель?')) {
            this.way = +prompt('Сколько пройдено км?');
            this.costEnergy = +prompt('Введите стоимость топливо..');
        } else {
            this.way = 0;
        };
         
        this.operation();
    };

    this.operation = function () {
        this.result = (this.way / 10) * this.costEnergy; //10 литров на 100км
         
        this.show();
    };
         
    this.show = function () {
         
        if (this.way == 0 || this.way == undefined) {
            console.log('Автомобиль "' + this.brand + '" под номером - ' + this.number + ' не включен.');
        } else {
            console.log('Автомобиль "' + this.brand + '" под номером - ' + this.number + ' проехал: ' + this.way + ' км, и стоимость топлива составило ' + this.result + ' BYN.');
        }
    };
};

let car1 = new Car ('1015EL-3', 'Audi', 'Petrol');