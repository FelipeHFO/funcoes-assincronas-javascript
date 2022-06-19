function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Felipe',
                sobrenome: 'Oliveira'
            })
        }, 1000);
    })
}

function obterVendaDoUsuario(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
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
    })
}

async function main(){
    const usuario = await obterUsuario();
    const venda = await obterVendaDoUsuario(usuario.id);

    console.log(usuario);
    console.log(venda);
}

main();