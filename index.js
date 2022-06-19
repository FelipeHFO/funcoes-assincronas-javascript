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

function obterSaldoDoUsuario(idUsuario){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(() => {
            return resolve({
                id: 1652746,
                conta: 033163216,
                digito: 5,
                agencia: 0001,
                saldo: 'R$ -5000,00'
            })
        }, 2000);
    })
}

async function main(){
    try{
        console.time('Time');
        const usuario = await obterUsuario();
        const [venda, saldo] = await Promise.all([
            obterVendaDoUsuario(usuario.id),
            obterSaldoDoUsuario(usuario.id),
        ])

        console.log(usuario);
        console.log(venda);
        console.log(saldo);
        console.timeEnd('Time');
    }
    catch(error) {
        console.error('Deu ruim', error);
    }
}

main();
