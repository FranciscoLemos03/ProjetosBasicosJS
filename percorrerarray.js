var arr = ["mercedes", "bmw" , "toyota" , "ferrari"]
var newcar = "lambo"

function percorrer() {

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i])

    }

}

arr.push(newcar)

arr.splice(0, 1)

percorrer()