class Person{
	constructor(name,surname){
		this.name = name;
		this.surname = surname;
	}
	getName(){
		return this.name;
	}
	getSurname(){
		return this.surname;
	}
	setSurname(newSurname){
		return this.surname = newSurname;
	}
}
let worker = new Person('Иван', 'Иванов');
console.log(worker.getName());
console.log(worker.getSurname());
console.log(worker.setSurname('Петров'));
console.log(worker.getSurname());
