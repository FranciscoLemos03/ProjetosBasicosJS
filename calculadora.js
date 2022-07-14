function calculadora(numero1, numero2, operator) {

    switch(operator){
        case "+":
            return numero1 + numero2
            break;
        case "-":
            return numero1 - numero2
            break;
        case "*":
            return numero1 * numero2
            break;
        case "/":
            return numero1 + numero2
            break;
    }
}

console.log(calculadora(10, 5, "+"))

