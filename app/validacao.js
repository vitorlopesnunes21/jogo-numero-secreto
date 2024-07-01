function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div class="valorInvalido">Valor inválido: Diga apenas números naturais</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
       elementoChute.innerHTML += `<div class="valorInvalido">valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
       return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1 class="valorCorreto">Você acertou</h1>
            <h2 class="valorCorreto">O número secreto era ${numeroSecreto}</h2>

            <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>
        `
    }

    if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é <b>MENOR ↓</b> que seu chute</div>`
    }

    if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é <b>MAIOR ↑</b> que seu chute</div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) { 
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }

})