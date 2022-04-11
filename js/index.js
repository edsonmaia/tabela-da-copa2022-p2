const verGrupos = () => {
    // requisicao dos dados json
    fetch('./grupos.json')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        // manipular os dados da requisicao

        // mapear o array de dados
        dados.map((grupo, index) => {
            criarCards()
            preencherDadosNosCards(grupo, index)
        }) // fim dados.map

    }) // fim then

} // fim verGrupos

// criar cards de grupos de selecoes
const criarCards = () => {
    // criar a estrutura do html e usar a clonagem
    let listaDeGrupo = document.querySelector('.listaDoGrupo').cloneNode(true)
    // usar o append
    document.querySelector('.listas').append(listaDeGrupo)
}

// preencher dados nos cards
const preencherDadosNosCards = (grupo, index) => {
    // destruturacao do grupo e selecoes
    let { grupo: ogrupo, selecao1, selecao2, selecao3, selecao4 } = grupo
    let [ bandeira1, pais1 ] = selecao1
    let [ bandeira2, pais2 ] = selecao2
    let [ bandeira3, pais3 ] = selecao3
    let [ bandeira4, pais4 ] = selecao4

    let tituloDoGrupo   = document.querySelectorAll('.tituloDoGrupo')
    let listaDeSelecoes = document.querySelectorAll('.listaDeSelecoes')

    tituloDoGrupo[index].innerHTML = `Grupo ${ogrupo}`
    listaDeSelecoes[index].innerHTML = `
    <li><img class='bandeirap' src='./images/bandeiras/${bandeira1}' alt='bandeira' /> ${pais1}</li>
    <li><img class='bandeirap' src='./images/bandeiras/${bandeira2}' alt='bandeira' /> ${pais2}</li>
    <li><img class='bandeirap' src='./images/bandeiras/${bandeira3}' alt='bandeira' /> ${pais3}</li>
    <li><img class='bandeirap' src='./images/bandeiras/${bandeira4}' alt='bandeira' /> ${pais4}</li>`
}

// executar verGrupos para criar os cards / section dos grupos e preencher os dados
verGrupos()
