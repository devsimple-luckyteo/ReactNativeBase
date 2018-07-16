const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 }
];

export default () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(people), 3000);
  });
