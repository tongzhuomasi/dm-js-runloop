setImmediate(() => {
  console.log(1);
}, 0);
setTimeout(() => {
  console.log(2);
}, 0);

new Promise(((resolve) => {
  console.log(3);
  resolve();
  console.log(4);
})).then(() => {
  console.log(5);
});

console.log(6);

process.nextTick(() => {
  console.log(7);
});
console.log(8);
