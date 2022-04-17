function dividir(num1, num2) {
    let resultado = num1 / num2
    if (num1 == 0) {
        return "No se puede dividir por cero"
    } else if (num2 == 0) {
        return "No se puede dividir por cero :("
    } else {
        return ("El resultado de la división es " + resultado)
    }
}
module.exports = dividir