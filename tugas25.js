var x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

console.log("Sebelumnya :", x.toString());
console.log("Ascending :", x.sort().toString());
console.log("Descending :", x.sort().reverse().toString());

var y = x.sort().reverse().filter(function (angka) {
  return angka > 10;
})
console.log("Filter > 10 :", y.toString());
