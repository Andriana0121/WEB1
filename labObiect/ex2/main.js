let salaries = {
  "John": 100,
  "Pete": 160,
  "Mary": 130
};

function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }

  return sum;
}
console.log(sumSalaries(salaries));