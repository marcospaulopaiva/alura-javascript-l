function menorValor(arrProdutos, possicaoInicial){
    let maisBarato = possicaoInicial;
    
    for (let atual = possicaoInicial; atual < arrProdutos.length; atual++){
        
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }    
    }
    return maisBarato;
}

module.exports = menorValor;