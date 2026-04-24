let userName1 = prompt("Ваше имя:");
let userName2=prompt("Имя возлюбленной:");
console.log(userName1);
console.log(userName2);
//объект Math встроенный объект в js с методами и св-вами
//Math.floor-Возвращает значение числа, округлённое к меньшему целому
//Math.random-Возвращает псевдослучайное число в диапазоне от 0 до 1.Поэтому что бы получить целые числа умножаем (на пример на 100 если диапозон до 100)
let index = Math.floor(Math.random() * 100);
alert("Ваша совместимость: "+index+"%")