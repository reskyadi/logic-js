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


// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand


// Stringify / ubah data ke string
const objForString = {
	id: 1,
	name: 1
};
console.log("Convert to string", JSON.stringify(objForString));

// JSON Parse / parsing data string ke JSON
const stringForParse = "[1,2,3]";
console.log("before parse", stringForParse);
console.log("parsing string", JSON.parse(stringForParse));


// Sort / Mengurutkan data
const arrSort = [9, 8, 7, 6, 5, 4, 3, 2, 1, "c", "b", "a", "nama", ":~", "aa", "zz"];
const sortArr = arrSort.sort();
const sortArr2 = JSON.parse(JSON.stringify(sortArr));
const reverseArr = sortArr2.reverse();
console.log(sortArr);
console.log(reverseArr);