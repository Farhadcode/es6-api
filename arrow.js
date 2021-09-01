// single line arrow funtion

number = () => 89;
console.log(number());

const multiplay = (num1, num2) => (num1 + num2) / 7;
const value = multiplay(20, 30);
const result = parseFloat(value).toFixed(2);
console.log(result);

const math = (num1, num2) => {
    value = num1 + num2;
    result = value / 2;
    return result
};

console.log(math(6, 10));

