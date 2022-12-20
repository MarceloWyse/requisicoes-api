async function listaVideos() {
    const fetchAPI = await fetch('http://localhost:3000/videos');
    const fetchAPIConvertida = await fetchAPI.json();
    return fetchAPIConvertida;
}

async function criaVideos(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            {
                titulo: titulo,
                descricao: `${descricao} visualizações`,
                url: url,
                imagem: imagem
            }
        )
    })

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscaVideos(termoDeBusca){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criaVideos,
    buscaVideos
};



