const arr = {country:"Portugal",continent:"Europa",population:11000000}
console.log(arr.country, arr.continent, arr.population)

const isIsland = false
console.log(isIsland)

var language
console.log(language)

language = "Portugues"
console.log(language)

var halfPopulation = arr.population/2
console.log(halfPopulation)

halfPopulation++
console.log(halfPopulation)

if(6000000 == arr.population) {
    console.log(true)
} else {
    console.log(false)
}

if(33000000 > arr.population) {
    console.log(true)
} else {
    console.log(false)
}

const description = arr.country + " está introduzido na " + arr.continent + " contem " + arr.population + " de habitantes e fala-se " + language
console.log(description)

var hoje = new Date()
var horas = hoje.getHours()

if(horas < 18){
    console.log("bom dia")
} else {
    console.log("boa tarde")
}

var diferenca = 33000000 - arr.population

if(33000000 < arr.population) {
    console.log("A populacao de Portugal está acima da media mundial")
} else {
    console.log("A populacao de Portugal está " + diferenca + " abaixo da media mundial")
}

