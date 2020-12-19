const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrObj = [
	{
		id: 1,
		name: "nama 1"
	},
	{
		id: 2,
		name: "nama 2"
	},
	{
		id: 3,
		name: "nama 3"
	},
	{
		id: 4,
		name: "nama 4"
	},
	{
		id: 1,
		name: "nama 1111"
	},
	{
		id: 2,
		name: "nama 2"
	},
	{
		id: 3,
		name: "nama 3"
	},
	{
		id: 4,
		name: "nama 4"
	}
];

// Find
const findArr = arr.find((item, index) => item === 1);
console.log(findArr);

// Find Object
const findObj = arrObj.find(item => item.name === "nama 1");
console.log(findObj);

// Filter
const filter = arr.filter(item => item > 1);
console.log(filter);

// Lower case / mengecilkan semua string
const str = "NAMA SAYA";
console.log(str.toLowerCase());

// Pake includes biar mirip mirip

// Filter Obj
const filterObj = arrObj.filter(item => item.name.toLowerCase().includes("nama 1"));
console.log(filterObj);