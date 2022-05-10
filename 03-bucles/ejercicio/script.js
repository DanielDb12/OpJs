let number = 100


for (let i = 0; i <=100; i++) {
  
  if (i % 2 === 0) {
    console.log(i,'PAR')
    
  } else {
    console.log(i,'impar')
    
  }  
}

for (let i = 0; i < 101; i++) {
  if (i % 3 === 0 && i % 5 ===0) {
    console.log(i,'fizzbuzz')
  }else if (i % 5 ===0) {
    console.log(i,'buzz')
  }else if (i % 3 ===0 ){
    console.log(i, 'Fizz')
  }
    
}
