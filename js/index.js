const verGrupos = () => {
    // requisicao dos dados json
    fetch('./grupos.json')
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)
        // manipular os dados da requisicao

        // mapear o array de dados
        dados.map((grupo, index) => {

            // criar a estrutura do html e usar a clonagem
            let listaDeGrupo = document.querySelector('.listaDoGrupo').cloneNode(true)
            //console.log(listaDeGrupo)

            // usar o append
            document.querySelector('.listas').append(listaDeGrupo)

            // preencher os dados em cada card / section da lista de selecoes
            let tituloDoGrupo = document.querySelectorAll('.tituloDoGrupo')
            //console.log(tituloDoGrupo)
            let listaDeSelecoes = document.querySelectorAll('.listaDeSelecoes')
            //console.log(listaDeSelecoes)

            tituloDoGrupo[index].innerHTML = `Grupo ${grupo.grupo}`

            listaDeSelecoes[index].innerHTML = `
            <li><img class='bandeirap' src='../images/bandeiras/${grupo.selecao1[0]}' alt='bandeira' />
            ${grupo.selecao1[1]}</li>
            <li><img class='bandeirap' src='../images/bandeiras/${grupo.selecao2[0]}' alt='bandeira' />
            ${grupo.selecao2[1]}</li>
            <li><img class='bandeirap' src='../images/bandeiras/${grupo.selecao3[0]}' alt='bandeira' />
            ${grupo.selecao3[1]}</li>
            <li><img class='bandeirap' src='../images/bandeiras/${grupo.selecao4[0]}' alt='bandeira' />
            ${grupo.selecao4[1]}</li>
            `

        })




    })

}

verGrupos()
