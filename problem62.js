const cubes = {};

let i = 1;
while (true) {
	const cube = i ** 3;

	let j = i + 1;
	while (true) {
		let jCubed;
		if (j in cubes) jCubed = cubes[j];
		else {
			jCubed = j ** 3;
			cubes[j] = jCubed;
		}
		if ((jCubed + "").length > (cube + "").length) break;
	}

	i++;
}
