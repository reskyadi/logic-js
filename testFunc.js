const arr = [1, 2, 3];
let sum = 0;
arr.forEach(i => {
	if (i !== 2) {
		sum = i + sum;
	}
});
console.log(sum);

// for (let i = 1; i <= 20; i++) {
// 	if (i === 1) {
// 		console.log(i + " Saya juara");
// 	} else if (i === 10) {
// 		console.log(i + " Ini nomor 10");
// 	} else {
// 		console.log("Hello");
// 	}
// }

const data = [
	{
	  id: 1,
	  token: '123',
	  name: 'name',
	  contact: 'lorem ipsum',
	},
	{
		id: 1,
	  token: '123',
	  name: 'name',
	  contact: 'lorem ipsum',
	},
	{
		id: 1,
	  token: '123',
	  name: 'name',
	  contact: 'lorem ipsum',
	},
];

// {
// 	id: '',
// 	token: '',
// 	identity: {
// 		name: '',
// 		contact: ''
// 	},
// }

// const newObj = data.map(({ id, token, name, contact }) => ({
// 	id,
// 	token,
// 	identity: {
// 		name,
// 		contact
// 	}
// }));

const newObj = data.map(item => {
	return {
		id: item.id,
		token: item.token,
		identity: {
			name: item.name,
			contact: item.contact
		}	
	}
});
console.log(newObj);