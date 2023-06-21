console.log("Task 1");
var numbersTo100;
numbersTo100 = 0;
while (numbersTo100 <= 100) {
  console.log(numbersTo100);
  numbersTo100++;
}

console.log("Task 2");
var num;
num = 0;
function oddEven() {
  do {
    num++;
    if (num % 2 == 0) {
      console.log(num + " - парне");
    } else {
      console.log(num + " - не парне");
    }
  } while (num < 10);
}
oddEven();

console.log("Task 3");
var num = 10000;
var result = num;
var counter = 0;

while (result >= 50) {
  result /= 2;
  counter++;
}

console.log("Результат: " + result);
console.log("Кількість ітерацій: " + counter);

console.log("Task 4");
var month = parseInt(prompt("Уведіть число між 1 та 12"));
var season = "";
var monthName = "";

switch (month) {
  case 1:
  case 2:
  case 12:
    season = "зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "осінь";
    break;
}

switch (month) {
  case 1:
    monthName = "січень";
    break;
  case 2:
    monthName = "лютий";
    break;
  case 3:
    monthName = "березень";
    break;
  case 4:
    monthName = "квітень";
    break;
  case 5:
    monthName = "травень";
    break;
  case 6:
    monthName = "червень";
    break;
  case 7:
    monthName = "липень";
    break;
  case 8:
    monthName = "серпень";
    break;
  case 9:
    monthName = "вересень";
    break;
  case 10:
    monthName = "жовтень";
    break;
  case 11:
    monthName = "листопад";
    break;
  case 12:
    monthName = "грудень";
    break;
}

alert("Пора року: " + season + "\nНазва місяця: " + monthName);

var tempCel = parseFloat(
  prompt("Введіть температуру в градусах Цельсія:")
);

var tempFahr = (9 / 5) * tempCel + 32;

alert("Температура за Фаренгейтом: " + tempFahr.toFixed(2));

var dayNumber = parseInt(prompt("Введіть число від 1 до 7:"));

var dayName = "";

switch (dayNumber) {
  case 1:
    dayName = "Понеділок";
    break;
  case 2:
    dayName = "Вівторок";
    break;
  case 3:
    dayName = "Середа";
    break;
  case 4:
    dayName = "Четвер";
    break;
  case 5:
    dayName = "П'ятниця";
    break;
  case 6:
    dayName = "Субота";
    break;
  case 7:
    dayName = "Неділя";
    break;
  default:
    dayName = "Некоректне число";
    break;
}

alert("День неділі: " + dayName);
