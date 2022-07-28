// Write a javascript function that prints the reverse of a number. Example: if the
// number is 149, then output should be 941.

function reverse(n) {
  let r = 0,
    s = 0;
  do {
    r = n % 10;
    s = s * 10 + r;
    n = Math.floor(n / 10);
  } while (n != 0);
  return s;
}
console.log(reverse(149));
