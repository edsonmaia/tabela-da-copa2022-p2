let url = ''
try {
    const pegaURL = new URL(window.location)
    //console.log(pegaURL)
    url = pegaURL.searchParams.get('rodada')
    //const url = '1'
    //console.log(url)
} catch(erro) {
    console.log("Não foi possível carregar os jogos")
}

// requisicao dos dados json
const listarJogos = (url) => {
    (url == null || url == '' || url < 1) ? url = 'oitavas' : ''
    return fetch(`jogos-${url}.json`)
    .then( resposta => resposta.json()) 
}

const criarCardJogo = () => {
    let listaDeJogos = document.querySelector('.listaDeJogos').cloneNode(true)
    document.querySelector('.tabela-de-jogos').append(listaDeJogos)
    return listaDeJogos
}

const preencherCardJogos = (lista, jogo) => {
    lista.querySelector('.data').innerHTML = `${jogo.diaSemana} ${jogo.data} às ${jogo.hora}`
    lista.querySelector('.partida').innerHTML = `<img class="bandeirap" src="./images/bandeiras/${jogo.mandante}" alt="" />
    ${jogo.partida}
    <img class="bandeirap" src="./images/bandeiras/${jogo.visitante}" alt="" />`
    lista.querySelector('.estadio').innerHTML = `${jogo.estadio}`
}

const renderizar = () => {
    listarJogos(url)
    .then(dado => {
        document.querySelector('.rodada').innerHTML = `${dado[0].rodada}`
        dado.map((jogo, indice) => {
            let lista = criarCardJogo(indice)
            preencherCardJogos(lista, jogo, indice)
        })
    })
}

renderizar()
