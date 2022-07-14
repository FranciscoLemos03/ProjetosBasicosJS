var data = new Date(2022,2,2)
console.log(data)

var mes = data.getMonth()
var dia = data.getDate()
var semana = data.getDay()

if(data.getDate().toString().length < 2) {
    dia = "0"+data.getDate()
}

if(data.getMonth().toString().length < 2) {
    mes = "0"+data.getMonth()
}

console.log(dia + "/" + mes + "/" + data.getFullYear())

switch(semana){
    case 0:
        console.log("segunda")
        break;
    case 1:
        console.log("terca")
        break;
    case 2:
        console.log("quarta")
        break;
    case 3:
        console.log("quinta")
        break;
    case 4:
        console.log("sexta")
        break;
    case 5:
        console.log("sabado")
        break;
    case 6:
        console.log("domingo")
        break;
}


