var numeroSecreto = parseInt(Math.random() * 1001);

while (chute != numeroSecreto) {
    var chute = prompt('digite um numero entre 0 e 1000')
    //se o chute for igual ao número secreto//
    if (chute == numeroSecreto) {
     alert('Acertou Miserável')
    } else if (chute > numeroSecreto) {
      alert('Errou... o numero secreto é menor')
    } else if (chute < numeroSecreto) {
      alert('Errou... o número secreto é maior')
    }
}