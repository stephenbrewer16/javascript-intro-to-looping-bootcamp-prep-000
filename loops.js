function forLoop(array) {
  for (let i = 0; i < 25; i++)
  if (i === 1) {
  array.push("I am 1 strange loop.")
} else {
  array.push(`I am ${i} strange loops.`)
}
return array
}
let n = 10;
function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return 'done'
}
i = 0;
num = 1;
function incrementVariable() {
  i = i + 1;
  return i;
}
do {
  function doWhileLoop() {
    console.log("I run once regardless.")
  }
} while (incrementVariable() < 10);
console.log(++i)
