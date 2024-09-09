function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById
  ("campo-pesquisa").value 

  // se campoPesquisa for uma string sem nada
  if (campoPesquisa =="") {
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados e cria o HTML correspondente
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        // se titulo includes campoPesquisa
         if (titulo.includes(campoPesquisa) ||
          descricao.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
        
        
    }

    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
}