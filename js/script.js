var num = +prompt('Введите четырехзначное число');

var num1 = (Math.floor (num / 1 % 10));
var num2 = (Math.floor (num / 10 % 10));
var num3 = (Math.floor (num / 100 % 10));
var num4 = (Math.floor (num / 1000 % 10));

if (num1 === num4 && num2 === num3){
    alert('Это число является палиндромом')
} else {
    alert('Это число не является палиндромом')
}