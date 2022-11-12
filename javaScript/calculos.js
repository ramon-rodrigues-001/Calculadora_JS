// Efetuando o calculo designado
function efetuarCalculo() {

    const telaDeResult = document.getElementById('telaDeResposta')

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


// Adicionando atravez do teclado
const allowedKeys = ['(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '-', '%']
export function addTeclado(ev) {
    ev.preventDefault()

    if (allowedKeys.includes(ev.key)) {
        tela.value += ev.key
    }
}


// Adicionando atravez dos butões
export function addButoes(ev) {
    
    const telaDeResult = document.getElementById('telaDeResposta')

    ev.addEventListener('click', (evento)=>{

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
}