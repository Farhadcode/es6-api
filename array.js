

/// map use 

const numbers = [896, 88, 899, 342, 786];
const maps = numbers.map(num => num / 5);
console.log(maps);
const map = numbers.map(num => {
    value = num / 7;
    result = parseFloat(value).toFixed(2);
    return result;
});

console.log(map);

// forEach use 

const useForEach = numbers.forEach(num => console.log(num));

// usenig filter 

const filters = numbers.filter(num => num > 100);
console.log(filters);

// find uses 
const finds = numbers.find(num => num > 100);
console.log(finds);