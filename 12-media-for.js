const numbers = [10, 6.5, 8, 7.5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("average", sum / numbers.length);
