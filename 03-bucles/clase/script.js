let unidades = 15
let decenas = 0

bucleDecenas : while (true) {
  bucleUnidades: while(true){
    console.log(`el numero actual es:${decenas} ${unidades}`)
    unidades++
    if (unidades ===10) {
      unidades = 0
      break 
    }

    if (decenas ===2) {
      break bucleDecenas
      
    }


  }

  decenas++
  
}
