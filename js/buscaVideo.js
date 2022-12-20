import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento){
    evento.preventDefault();
    const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideos(dadosPesquisa);

    const lista = document.querySelector('[data-lista]');

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    lista.forEach(elemento => 
        lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
)}

const botaoDePesquisa = document.querySelector(['data-botao-pesquisa']);

botaoDePesquisa.addEventListener('click', evento => buscarVideos(evento));