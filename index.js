x = 3;

function index(check) {
  if (check) {
    x = Math.floor(Math.random() * 100);
  }
  return x;
}

console.log('Index =>', index(true));
