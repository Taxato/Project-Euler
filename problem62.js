const cubes = {};

for (let i = 1; i <= 10000; i++) {
	cubes[i] = { cube: i ** 3 };
}

Object.entries(cubes).forEach(
	c => (cubes[c[0]].sorted = String(c[1].cube).split("").sort().join(""))
);

const perms = {};

Object.values(cubes).forEach(c => {
	const p = c.sorted;
	if (!(p in perms)) perms[p] = 0;

	perms[p]++;
});

const quints = Object.keys(perms).filter(p => perms[p] === 5);

for (const q of quints) {
	console.log(Object.entries(cubes).filter(c => c[1].sorted === q));
}
