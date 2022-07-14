// imprime entre 2 e 6 | 10 e 12 | senao fora range

function imprimir(num) {
    if (num >= 2 && num <= 6 || num >= 10 && num <= 12 ) {
        return console.log(num)
    } else {
        return console.log("O numero " + num + " esta fora da range")
    }
}

imprimir(2)