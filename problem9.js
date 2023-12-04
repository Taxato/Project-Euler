function isPythTriple(a, b, c) {
	return a ** 2 + b ** 2 === c ** 2;
}

function getC(a, b) {
	return Math.sqrt(a ** 2 + b ** 2);
}

for (let a = 0; a < 500; a++) {
	for (let b = 0; b < 500; b++) {
		const c = getC(a, b);
		if (isPythTriple(a, b, c) && a + b + c === 1000) {
			console.log(a * b * c);
			console.log(a, b, c);
			break;
		}
	}
}
