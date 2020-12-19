const arr = [
	{
		id: 1,
		status: "ok"
	},
	{
		id: 2,
		status: "error"
	},
];

// Map jadi object lagi
const mapArr = arr.map(item => {
	return {
		code: item.id,
		status: item.status
	}
});
console.log(mapArr);

const shortMapArr = arr.map(({ id }) => id);
console.log(shortMapArr);

const shortMapArrObj = arr.map(item => ({
	code: item.id,
	status: item.status
}));
console.log(shortMapArrObj);