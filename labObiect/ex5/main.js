let person = {
	name: "Person",
	age: 123,
	salary: 1542.33,
	contacts: {
		phone: "112",
		email: "email@domain.com"
},
	address: "Moldova",

	get	gtname(){
		return this.name;
	},
	get gtage(){
		return this.age;
	},
	get gtsalary(){
		return this.salary;
	},
	get gtphone(){
		return this.contacts.phone;
	},
	get gtemail(){
		return this.contacts.email;
	},
	get gtaddress(){
		return this.address;
	},
}
console.log(person.gtname);
console.log(person.gtage);
console.log(person.gtsalary);
console.log(person.gtphone);
console.log(person.gtemail);
console.log(person.gtaddress);