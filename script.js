// Mudar tema
document.getElementById('mudarTema').addEventListener('click', ()=>{
    document.body.classList.toggle('is-dark')
    document.body.classList.toggle('is-white')
})

const tela = document.getElementById('tela')
const telaDeResult = document.getElementById('telaDeResposta')
telaDeResult.setAttribute('disabled', !telaDeResult.disabled)

const allowedKeys = ['(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '-', '%']


function efetuarCalculo() {
    telaDeResult.value = 'Erro'
    telaDeResult.classList.add('resultInvalido')

    const resultado = eval(tela.value)
    if (resultado === NaN) {
        telaDeResult.value = 'Erro'
        telaDeResult.classList.add('resultInvalido')
    }
    telaDeResult.value = resultado
    telaDeResult.classList.remove('resultInvalido')
}

// Adicionando atraves do input
tela.addEventListener('keydown', (evInput)=>{
    evInput.preventDefault()

    if (allowedKeys.includes(evInput.key)) {
        tela.value += evInput.key
    }
})

// Adicionando atraves dos butões
document.querySelectorAll('.teclas').forEach((elButton)=>{
    elButton.addEventListener('click', (evento)=>{

        const elementoAcionado = evento.currentTarget

        if (elementoAcionado.value === 'apagar') {
            tela.value = tela.value.slice(0, -1)
            telaDeResult.value = ''
        }
        else if (elementoAcionado.value === 'igual') {
            efetuarCalculo()
        }
        else {
            tela.value += `${elementoAcionado.value}`
        }
    })
})


document.getElementById('copy').addEventListener('click', (evCopy)=>{
    const copy = evCopy.currentTarget
    
    if (copy.innerText === 'Copy') {
        copy.innerText = 'Copied'
        copy.classList = 'copied'
        window.navigator.clipboard.writeText(telaDeResult.value)
    }
    else {
        copy.innerText = 'Copy'
        copy.classList = 'copy'
    }
})