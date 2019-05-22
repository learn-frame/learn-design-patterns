function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

const cat = {
  name: 'Lolita',
  friends: ['Yancey', 'Sayaka', 'Mitsuha'],
  say() {
    console.log(this.name);
  },
};

const cat1 = create(cat);
const cat2 = Object.create(cat);

cat1.friends.push('Sae');

console.log(cat.friends); // ['Yancey', 'Sayaka', 'Mitsuha', 'Sae']
console.log(cat2.friends); // ['Yancey', 'Sayaka', 'Mitsuha', 'Sae']
