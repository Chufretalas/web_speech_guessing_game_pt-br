import sorteiaAleatorio from "./sorteia_numero.js"

export const menorValor = 0
export const maiorValor = 1000
export const numeroSecreto = sorteiaAleatorio(menorValor, maiorValor)

console.log(numeroSecreto)

const menorSpan = document.getElementById("menor-valor")
const maiorSpan = document.getElementById("maior-valor")

menorSpan!.innerText = menorValor.toString()
maiorSpan!.innerText = maiorValor.toString()