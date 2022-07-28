//Task 1
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
}
console.log( getSum(100));

//variant 2
function getSum(n) {
    return n * (n + 1) / 2;
}
console.log(getSum(100));

  //Task 2
function creditOverpay(a) {
    let percent = 0.17;
    let years = 5;
    return  Math.round((a * percent * years));
}
console.log(creditOverpay(10000));

//Task 3
function trimString(str, valueFrom, valueTo) {
    return str.slice(valueFrom, valueTo);
}
console.log(trimString('Красные помидоры,зеленые огурцы', 4, -2));

//Task 4
//variant1
function getSumNumbers(num) {
    num = Math.abs(num);
    let sum = 0;
    while (num > 0) {
        let remain = num % 10;
        sum += remain;
        num = (num - remain) / 10;
    }
    return sum;
}
console.log(getSumNumbers(2021));

//variant2
function getSumNumbersV2(num) {
    const numStrValue = num.toString();
    const arrOfStrDigits = numStrValue.split('');
    let sum = 0;
    for(let i = 0, j = arrOfStrDigits.length; i < j; i++) {
        sum += parseInt(arrOfStrDigits[i]);
    }
    console.log(num, numStrValue, arrOfStrDigits, sum);
}
console.log(getSumNumbersV2(2021));

//Task 5
function getSum(a, b) {
    let sum = 0;
    if(a < b) {
        sum += a++;
        return sum + b;
    }  
    if(a > b) {
        sum += a + b;
    }
    if(a === b) {
        return a;
    }
}
console.log(getSum(2, 2));

//Task 6
function foo() {
    console.log('foo');
}
function boo() {
    console.log('boo');
}
function fooBoo(isTrue, funcOne, funcTwo) {
    if(isTrue) {
        funcOne();
    }
    else {
        funcTwo();
    }
}
fooBoo(false, foo, boo);

//Advanced
//Task 1
function triangle(a, b, c) {
    if(a + b > c && b + c > a && a + c > b) {
        return true;
    }
    else {
        return false;
    }
}
console.log(triangle(5, 5, 5));

//Task 2
function chocoDiv(n, m) {
    const i = 1;
    let sum = 0;
    if(n > 0 && m > 0){
        sum += (n - 1) + (m - 1);
        return sum;
    }
    else {
        return 0;
    }
    
}
console.log(chocoDiv(2, 1));

//Task 3
// new IntlNumberFormat('en-In', { maximumSignificantDigits: 2 }, { style: 'currency', currency: 'USD' }).format(commonPrice(500, 100, 0.15))
const taxRate = 0.15;
const phonePrice = 500;
const accPrice = 100;
let moneyBalance = 5000;

//считает налог
function totalPrice() {
    let sum = 0;
    let tax= (phonePrice + accPrice) * taxRate;
    sum += phonePrice + accPrice + tax;
    return sum;
}
totalPrice();

//форматирует и выводит баланс
let balanceForm = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
});
console.log(balanceForm.format(moneyBalance));

//форматирует сумму покупки
    let totalPriceForm = new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    });
console.log(totalPriceForm.format(totalPrice()));

// function checkBalance() {
//     if(totalPrice() <= moneyBalance) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(checkBalance());

function buyPhone() {
    
}
console.log(buyPhone());

