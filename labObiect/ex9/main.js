const weekDays = {
	Mo: "Понедельник",
	Tu: "Вторник",
	We: "Среда",
	Th: "Четверг",
	Fr: "Пятница",
	Sa: "Суббота",
	Su: "Воскресенье",
};
const trRo = {
	"Понедельник": "Luni",
	"Вторник": "Marti",
	"Среда": "Miercuri",
	"Четверг": "Joi",
	"Пятница": "Vineri",
	"Суббота": "Sambata",
	"Воскресенье": "Duminica",
};
function translate(obj, trRo) {
	for (let key in obj) {
		let ru = obj[key];
		let ro = trRo[ru];
		obj[key] = ro;
	}
}
translate(weekDays, trRo);
console.log(weekDays);
