//Task 1
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
    }
    return sum;
}
console.log( getSum(100) );

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
