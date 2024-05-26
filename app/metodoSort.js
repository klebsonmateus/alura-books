btnOrdenardPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenardPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a,b) => b.preco - a.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}