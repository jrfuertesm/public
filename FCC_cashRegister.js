// JavaScript Algorithms and Data Structures Projects: Cash Register

    // mejor usar siempre objetos en vez de arrays, es mucho más fácil identificar valores
    // siempre usar las unidades menores: mejor segundos que horas, centímetros que kilómetros...
    // en la vida real se trabaja con objetos y no con arrays...
    // IMPORTANTE que el nombre de las variables y las funciones sea autoexpicativo...

function checkCashRegister(price, cash, cid) {

  const answer = {}
  let restante

  function calculateChangeInCents(cash, price) { // devuelve changeInCents2
    // cálculo del cambio a devolver en céntimos
    const changeInCents2 = Number(((cash - price) * 100).toFixed(0))
    return changeInCents2
  } // fin calculateChangeCents()

  function cidToCents (cid) { // devuelve cidInCents2
    // se convierten los totales de cada denominación a céntimos
    let cidInCents2 = []
    cid.map( denominacion => {
      let tempArray = []
      let importeNenominacion = Number((denominacion[1]*100).toFixed(0)) 
      tempArray.push( denominacion[0] )  
      tempArray.push( importeNenominacion )
      cidInCents2.push(tempArray)
    })
    return cidInCents2
  } // fin cidToCents()

  function calculateCidCentsTotal(cidInCents) { // devuelve cidInCentsTotal2
    let cidInCentsTotal2 = 0
    cidInCents.map((denominacion) => {
      cidInCentsTotal2 += denominacion[1]
    })
    return cidInCentsTotal2
  } // fin calculateCidTotal()

  function calculateChangeArray(changeInCents, cidInCents) { // devuelve changeArray2
    const denomImportesArray = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1]
    let changeArray2 = []
    restante = changeInCents
    cidInCents.reverse().map( (denominacion, index) => {
      let denomUnitsAlaiable = denominacion[1] / denomImportesArray[index]
      let denomUnitsDesired =  Math.trunc((restante/denomImportesArray[index]))

      if (denomUnitsDesired !== 0) {
        if (denomUnitsDesired >= denomUnitsAlaiable) {
          restante -= denominacion[1]
          let temporae = []
          temporae.push(denominacion[0])
          temporae.push(denominacion[1]/100)
          changeArray2.push(temporae)
          denominacion[1] = 0
        } else {
          let amountToMoveInCents = denomUnitsDesired * denomImportesArray[index]
          restante -= amountToMoveInCents
          let temporae = []
          temporae.push(denominacion[0])
          temporae.push(amountToMoveInCents/100)
          changeArray2.push(temporae)
          denominacion[1] -= amountToMoveInCents
        }
      }
    })
    return changeArray2
  }

  

            ////////////////////////
            //    main program    //  
            ////////////////////////



  const changeInCents = calculateChangeInCents(cash, price)
  const cidInCents = cidToCents(cid)
  const cidInCentsTotal = calculateCidCentsTotal(cidInCents)

  if (cidInCentsTotal < changeInCents) {
    answer.status = "INSUFFICIENT_FUNDS"
    answer.change = []
    return answer
  }
  if (cidInCentsTotal === changeInCents) {
    answer.status = "CLOSED"
    answer.change = cid
    return answer
  }
  if (cidInCentsTotal > changeInCents) {
    const changeArray = calculateChangeArray(changeInCents, cidInCents)
    if (restante == 0) {
      answer.status = "OPEN"
      answer.change = changeArray
    } else {
      answer.status = "INSUFFICIENT_FUNDS"
      answer.change = []
    }
    return answer
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])