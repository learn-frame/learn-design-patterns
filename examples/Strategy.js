const map = new Map();

map.set('S', salary => salary * 4);
map.set('A', salary => salary * 3);
map.set('B', salary => salary * 2);
map.set('C', salary => salary * 1);

const calulate = (grade, salary) => {
  const curGrade = map.get(grade);
  if (typeof curGrade !== 'function') return;
  return curGrade(salary);
};

console.log(calulate('S', 100000));
