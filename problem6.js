let squareSum = 0;
let sum = 0;
for (let i = 1; i <= 100; i++) {
	sum += i;
	squareSum += i ** 2;
}
const sumSquare = sum ** 2;
console.log(sumSquare - squareSum);
