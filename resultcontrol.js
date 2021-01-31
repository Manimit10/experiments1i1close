localDB = window.localStorage;

console.log('from result control...');
console.log(localDB);

new URLSearchParams(window.location.search).forEach((value, name) => {
  //   console.log(`${name} -> ${value}`);
  localDB.setItem(`${name}`, `${value}`);
});
console.log(localDB.getItem('bloom'));
