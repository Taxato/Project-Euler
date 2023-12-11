const radToDeg = r => (r / (Math.PI * 2)) * 360;

function areaOfTriangleWithCirclesN(n) {
	// inscribed circles have radius 1
	const width = 2 * n;
	const height = 2;

	const smallHalf = ((2 / n) * 2) / 2;

	const angle = radToDeg(Math.atan(1 / n));
	console.log((angle / 90) * 100, "%");
}

areaOfTriangleWithCirclesN(1);
