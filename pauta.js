function Oaluno(nome, nota) {

    switch (nota) {
        case nota < 5:
            return "O aluno " + nome + " teve nota de " + nota + " que e insuficiente"
            break;
        case nota > 5 && nota < 7:
            return "O aluno " + nome +  " teve nota de " + nota + " que e suficiente"
            break;
        case nota > 7:
            return "O aluno " + nome + "teve nota de " + nota + " que e excelente"
            break;
    }
}

console.log(Oaluno("francisco", 10))