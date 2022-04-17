function multiplicar(num1, num2){
    let resultado = num1 * num2
    if (num1 == 0) {
        return resultado = 0
    } else if (num2 == 0) {
        return resultado = 0
    } else {
        return ("El resultado de la multiplición es " + resultado)
    }
}
module.exports = multiplicar