const readlineSync = require('readline-sync')

console.log("------------------------------------------")
console.log(" ")

var linhas = readlineSync.questionFloat("Digite primeiro, o numero de linhas: ")
var colunas = readlineSync.questionFloat("Agora o de colunas: ")

//Fórmula para o termo geral de um progressão aritmética.

// aN = a1 + (n - 1) x r



if (linhas == colunas) {
    var aN = colunas + 1
    var a1 = colunas + 1 - colunas
    var n = aN
    var r = n

    console.log("------------------------------------------")
    console.log(" ")
    console.log("Minha quantidade de posições é: " + aN)
    console.log("------------------------------------------")
    console.log(" ")
    console.log("O termo da primeira posição é: " + a1)
    console.log("------------------------------------------")
    console.log(" ")
    console.log("Minha quantidade de termos é: " + n * n)
    console.log("------------------------------------------")
    console.log(" ")
    console.log("Minha razão é: " + r)

} else {
    var aN = linhas + 1
    var a1 = linhas + 1 - linhas
    var n = aN
    var r = colunas + 1

    console.log("------------------------------------------")
    console.log(" ")
    console.log("Minha quantidade de posições é: " + aN)
    console.log("------------------------------------------")
    console.log(" ")
    console.log("O termo da primeira posição é: " + a1)
    console.log("------------------------------------------")
    console.log(" ")
    console.log("Minha quantidade de termos é: " + n * (colunas + 1))
    console.log("------------------------------------------")
    console.log(" ")
    console.log("Minha razão é: " + r)
}
