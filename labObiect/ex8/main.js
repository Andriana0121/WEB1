const data = {
	"Luni": "Mo",
	"Marti": "Tu",
	"Miercuri": "We",
	"Joi": "Th",
	"Vineri": "Fr",
	"Simbata": "Sa",
	"Duminica": "Su"
};
function reverse(data) {
	return Object.entries(data).reduce((reverse, entry) => {
		reverse[entry[1]] = entry[0];
		return reverse;
	}, {})
}
console.log(reverse(data));