class Validator {
	isEmail(email) {
		return (/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(email));
	} 
	isDomain(domain) {
		return (/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/.test(domain));
	} 
	isDate(date) {
		return (/^(0?[1-9]|[12][0-9]|3[01])[.\-](0?[1-9]|1[012])[.\-]\d{4}$/.test(date));
	} 
	isPhone(phone) { 
		return (/^\+?[0-9]{3}-?[0-9]{6,12}$/.test(phone)); 
	} 
} 
let validator = new Validator(); 
console.log(validator.isEmail('phphtml@mail.ru')); 
console.log(validator.isDomain('phphtml.net')); 
console.log(validator.isDate('12.05.2020')); 
console.log(validator.isPhone('+37369456565'));
