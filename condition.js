const a = true;
const b = true;
if (a) {
	console.log("Ini if kondisi pertama");
} else if (b) {
	console.log("Ini else if");
} else {
	console.log("Ini else");
}

// == Cek kondisi tanpa tipe data
// === Cek kondisi bersamaan dengan tipe datanya
const c = 1;
console.log(c === "1");

// One line codition, memakai ? yg menghasilkan true dan false yg dibatasi dengan :
console.log(c === "1" ? "ini true" : "ini false");
