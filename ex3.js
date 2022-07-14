// ex 1 funcoes

function descreverPais(pais, populacao, capital) {
    return `${pais} tem ${populacao} milhoes de habitantes e a sua capital é ${capital}`;
  }
  
  console.log(descreverPais('Portugal', 11, 'Lisboa'));

  // ex 2 funcoes

  console.log(descreverPais('China', 110, 'madeira'));
  console.log(descreverPais('Japao', 20, 'açores'));
  console.log(descreverPais('Tiago', 19, 'Saramago'));

  // ex 1 e 2 funções vs expressoes 

function percentagemdomundo(pais, populacao) {
    let percentagem = (populacao*100)/7900

    return `${pais} tem ${populacao} milhoes de habitantes o que equivale a ${percentagem} da população mundial `;
  }

  console.log(percentagemdomundo('China', 1440));

  // ex 3 funcoes vs expressoes

  console.log(percentagemdomundo('Espanha', 110));
  console.log(percentagemdomundo('Japao', 20));
  console.log(percentagemdomundo('Tiago', 19));

  // funcoes que chamam outras funcoes

  function descreverPopulacao(pais, populacao) {
        var percentagem = percentagemdomundo(populacao)
        var string = pais + " tem " + populacao + " habitantes, portanto representa cerca de " + percentagem + " da população mundial";
        return string
    }

    descreverPopulacao("china", 1440)
    descreverPopulacao("japao", 20)
    descreverPopulacao("tiago", 19)

  // introdução a arrays

    var populacoes = [1440, 20, 19];
    console.log(populacoes.length == 3);
    var percentagens = [percentagemdomundo(populacoes[0]), percentagemdomundo(populacoes[1]), percentagemdomundo(populacoes[2])];
    console.log(percentagens);

  // Array

  var vizinhos = ["Portugal", "Espanha"];

for (i = 0; i < vizinhos.length; i++) {
    if (i == 1) {
        var temp = vizinhos[i + 1];
        vizinhos[i] = "Utopia";
        vizinhos[i + 1] = temp;
    }
}

for (i = 0; i < vizinhos.length; i++) {
    if (vizinhos[i] == "Utopia") {
        vizinhos[i] = vizinhos[i + 1];
        vizinhos.pop();
    }
}

for (i = 0; i < vizinhos.length; i++) {
    if (vizinhos.indexOf("Alemanha") == -1) {
        console.log("Provavelmente não é um país central.");
    }
}

var index = vizinhos.indexOf("Suecia");
for (i = 0; i < vizinhos.length; i++) {
    if (i == index) {
        vizinhos[i] = "Republica da suecia";
    }
}

    // objetos

    var oMeuPais = {
        pais: "Finlandia",
        capital: "Porto",
        linguagem: "Chinês",
        populacao: 2,
        vizinhos: 3,
        describe: function() {
            console.log(this.pais + " tem " + this.populacao + " milhoes de habitantes que falam " + this.linguagem + ", " + this.vizinhos + " paises vizinhos, e a capital chama-se " + this.capital);
        },
        checkIsland: function() {
            this.isIsland = this.vizinhos == 0;
            console.log(this.isIsland);
        }
    };
    
    
    oMeuPais.populacao = oMeuPais.populacao + 2;
    console.log(oMeuPais.populacao);
    oMeuPais['populacao'] = oMeuPais['populacao'] - 2;
    console.log(oMeuPais.populacao);
    console.log(oMeuPais.describe(), oMeuPais.checkIsland());

    // bonus primo

    function primo(num) {

        if (num === 2) {
          return true;
        } else if (num > 1) {
          for (var i = 2; i < num; i++) {
      
            if (num % i !== 0) {
              return true;
            } else if (num === i * i) {
              return false
            } else {
              return false;
            }
          }
        } else {
          return false;
        }
      
      }
      
      console.log(primo(121));

    // bonus livro

    varlibrary = [
        {
            title:'Bill Gates',
            author:'The Road Ahead',
            readingStatus:true
        },
        {
            title:'Steve Jobs',
            author:'Walter Isaacson',
            readingStatus:true
        },
        {
            title:'Mockingjay: The Final Book of The Hunger Games',
            author:'Suzanne Collins',
            readingStatus:false
        }];

    /* duvida */

    






