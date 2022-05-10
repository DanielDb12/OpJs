mibucle:
for (let numero = 0; numero < 10; numero++) {
  if (numero <= 1) {
    console.log(numero);
    continue mibucle;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
console.log(i)
      console.log(numero);
      continue mibucle;
    }
  }
  console.log(numero,"Es número primo");
}


