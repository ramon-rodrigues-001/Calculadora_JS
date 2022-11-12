// Mudar tema
import {fmudarTema} from "./mudarTema.js"
document.getElementById('mudarTema').addEventListener('click', fmudarTema)


// Deixando imput de resposta inativo
const tela = document.getElementById('tela')
const telaDeResult = document.getElementById('telaDeResposta')
telaDeResult.setAttribute('disabled', !telaDeResult.disabled)


// Adicionando atraves do teclado
import {addTeclado} from "./calculos.js"
tela.addEventListener('keydown', addTeclado)


// Adicionando atraves dos butões
import {addButoes} from "./calculos.js"
document.querySelectorAll('.teclas').forEach(addButoes)


// Sistema de copy para copiar o resultado
import {fCopy} from "./sistemOfCopy.js"
document.getElementById('copy').addEventListener('click', fCopy)