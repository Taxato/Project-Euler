const cards = [];

for (const suit of ["S", "C", "H", "D"]) {
	for (let i = 1; i <= 13; i++) {
		cards.push(suit + i);
	}
}

console.log(cards);

/* 
First draw, chance is 0

ex : draw S1
chance to draw another 1: 3/51 = 1/17

ex: second draw is a 3
chance to draw another 3: 3/50

*/
