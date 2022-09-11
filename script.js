let numberOne
let numberTwo

numberOne = Number(prompt("Digite o primeiro número:"))
numberTwo = Number(prompt("Digite o segundo número:"))

alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é: ${numberOne % numberTwo}`)

if ((numberOne + numberTwo) % 2 == 0) {
  alert("A soma dos dois números é par.")
} else {
  alert("A soma dos dois números é ímpar.")
}

if (numberOne == numberTwo) {
  alert("Os números inceridos são iguais.")
} else {
  alert("Os números inceridos são diferentes.")
}