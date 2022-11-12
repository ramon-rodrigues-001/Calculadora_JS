// Sistema de copy

export function fCopy(ev) {
    const telaDeResult = document.getElementById('telaDeResposta')
    const copy = ev.currentTarget
    
    if (copy.innerText === 'Copy') {
        copy.innerText = 'Copied'
        copy.classList = 'copied'
        window.navigator.clipboard.writeText(telaDeResult.value)
    }
    else {
        copy.innerText = 'Copy'
        copy.classList = 'copy'
    }
}