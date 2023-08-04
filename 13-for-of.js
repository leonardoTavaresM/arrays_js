const numbers = [10, 6.5, 8, 7.5];

let sum = 0;

for (let elemento of numbers) {
  sum += elemento;
}

console.log("media", sum / numbers.length);
