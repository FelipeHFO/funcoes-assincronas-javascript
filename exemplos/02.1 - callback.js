function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Felipe',
            sobrenome: 'Oliveira'
        })
    }, 1000);
}

function obterVendaDoUsuario(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            id: 5648,
            produtos: [
                {
                    id: 43,
                    descricao: 'Arroz 1kg',
                    preco: 'R$ 100,00'
                },
                {
                    id: 32,
                    descricao: 'Feijão 500g',
                    preco: 'R$ 25,00'
                },
            ]
        })
    }, 2000);
}

function resolverUsuario(error, usuario){
    if(error){
        console.error('Deu ruim em usuário', error)
        return;
    }
    obterVendaDoUsuario(usuario.id, function resolverVenda(error1, venda) {
        if(error1){
            console.error('Deu ruim na venda', error1)
            return;
        }
        console.log(`Nome: ${usuario.nome} ${usuario.sobrenome}`);
        console.log('Venda:', venda);
    });
}

obterUsuario(resolverUsuario);