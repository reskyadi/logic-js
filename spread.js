// allows an iterable such as an array expression or string to be expanded in places where zero or more arguments
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj1 = {
	id: 1
};
const obj2 = {
	name: "name"
};
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const string = "abcde";
console.log([...string]);