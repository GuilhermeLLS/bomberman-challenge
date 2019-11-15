let readLineSync = require('readline-sync')

module.exports = function readData() {
    let lines = readLineSync.question("Digite o numero de linhas: ")
    let columns = readLineSync.question("Digite o numero de colunas: ")
    let seconds = readLineSync.question("Digite o numero de segundos: ")
    return { lines, columns, seconds }
}
