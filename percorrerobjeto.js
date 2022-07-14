var arr = [1, "dsadada", , undefined, null, 123]

function percorrer() {

    for (let i = 0; i < arr.length; i++) {

        if (isNaN(arr[i])) {
            console.log(arr[i])
        } else {
            console.log("Não é Numero")
        }

    }

}

percorrer()