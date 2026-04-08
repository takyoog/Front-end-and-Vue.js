console.log("Задание 1");

let car = {
  brand: "KIA",
  model: "Carnival",
  year: 2021,
  color: "голубой"
};

function getProperty(obj, propName) {
  return obj[propName];
}
console.log("Машина бренда: ", getProperty(car, "brand")," , модель: ", getProperty(car, "model")," , год выпуска машины: ", getProperty(car, "year")," , цвет машины: ", getProperty(car, "color"));
console.log("Существующее свойство (цвет):", getProperty(car, "color"));
console.log("Несуществующее свойство (пробег):", getProperty(car, "mileage"));

let propertyName = "model";
console.log("Название в переменной:", getProperty(car, propertyName));



console.log("Задание 2");
let students = [
  {
    name: "Михаил",
    age: 23,
    grades: { math: 5, physics: 4, programming: 5 }
  },
  {
    name: "Мария",
    age: 19,
    grades: { math: 3, physics: 5, programming: 4 }
  },
  {
    name: "Иван",
    age: 22,
    grades: { math: 5, physics: 3, programming: 5 }
  },
  {
    name: "Ульяна",
    age: 18,
    grades: { math: 4, physics: 4, programming: 4 }
  }
];

function studentsOverTwentyYearsOld(studentsArray) {
  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].age > 20) {
      console.log(studentsArray[i].name);
    }
  }
}

function BestInProgramming(studentsArray) {
  let maxGrade = 0;
  let bestStudent = null;
  
  for (let i = 0; i < studentsArray.length; i++) {
    if (studentsArray[i].grades.programming > maxGrade) {
      maxGrade = studentsArray[i].grades.programming;
      bestStudent = studentsArray[i];
    }
  }
  return bestStudent;
}

console.log("Студенты старше 20 лет:");
studentsOverTwentyYearsOld(students);

let theBestInProgrammingIs = BestInProgramming(students);
console.log("Студент с максимальной оценкой по программированию:");
console.log(theBestInProgrammingIs.name, "- оценка:", theBestInProgrammingIs.grades.programming);



console.log("Задание 3");
let product = {};

product.name = "iPad";
product["price"] = 800;
product["in stock"] = "yes";
let propCategory = "category";      
product[propCategory] = "Electronics";

console.log(product);

// Доступ к "in stock" через точку (вызовет ошибку, потому что засчитается только in, а stock после пробела будет считаться отдельной командой):
// console.log(product.in stock); 

// Доступ к "in stock" квадратные скобки (сработает):
console.log(product["in stock"]); // => true



console.log("Задание 4");
let calculator = {
  value: 0,
  add: function(n) {
    this.value += n;
  },
  subtract: function(n) {
    this.value -= n;
  },
  getValue: function() {
    return this.value;
  }
};

calculator.add(10);
calculator.subtract(2);
calculator.add(7);
console.log("Результат 1:", calculator.getValue());

let addFunc = calculator.add;
// Этот вариант вызова метода не сработает, потому что метод add через this ссылается на своего хозяина - calculator, 
// а у простой функции addFunc нет никакой информации о том, к какому объекту эта функция когда-то принадлежала.
// Поэтому this становится (ссылается на) глобальным объектом (который = undefined)
console.log("Результат 2:", addFunc(5));
