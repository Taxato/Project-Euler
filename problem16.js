console.log(sumDigits(2n ** 1000n));

for (let i = 0; i < 20; i++) {
	const pow = 2 ** i;
	console.log(pow, sumDigits(pow));
}

function sumDigits(n) {
	return String(n)
		.split("")
		.reduce((sum, cur) => (sum += +cur), 0);
}
