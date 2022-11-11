
// Adicionando atraves do input
tela.addEventListener('keydown', (evInput)=>{
    evInput.preventDefault()

    if (allowedKeys.includes(evInput.key)) {
        tela.value += evInput.key
    }
})