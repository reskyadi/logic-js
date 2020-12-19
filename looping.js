// Loop for
for (let i = 0; i <= 2; i++) {
	console.log(i);
}

// Loop foreach
const arr = [
	{
		id: 1,
		name: "nama 1",
	},
	{
		id: 2,
		name: "nama 2",
	},
	{
		id: 2,
		name: "nama 3",
	}
];

// Pakai index apa bila perlu
arr.forEach((item, index) => {
	console.log("Ini Object", index, item);

	// Cara panggil object di loop
	console.log(item.name);
});

// Loop while
let i = 1;
while (i < 3) {
	console.log("while loop", i);
	i++;
}