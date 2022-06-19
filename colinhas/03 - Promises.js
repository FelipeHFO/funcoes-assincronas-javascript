/**
 * A função resolvePromise é um callback, porém não segue a convenção dos callbacks normais, já que se trata de Promises.
 */

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

obterUsuario()
    .then(function (usuario) {
        return obterVendaDoUsuario(usuario.id)
            .then((resultado) => {
                return {
                    usuario, 
                    venda: resultado
                }
            })
    })
    .then((resultdo)  => console.log('Resultado', resultdo))
    .catch((error) => console.error('Deu ruim', error))


/*
Execute assim e terá o resultado do Usuário

obterUsuario()
    .then((resultdo)  => console.log(resultdo))
    .catch((error) => console.error('Deu ruim', error))
*/

/*
Execute assim e terá somente o resultado da Venda

Obs: As Promises trabalham com o conceito de Pipe, ou seja, 
estavamos executando a função obterUsuario -> resolvemos ela com a função .then() -> em seguida chamamos a função obterVendaDoUsuario, que agora é nossa função em execução -> resolvemos ela com o .then()

obterUsuario()
    .then((usuario) => obterVendaDoUsuario(usuario.id))
    .then((resultdo)  => console.log(resultdo))
    .catch((error) => console.error('Deu ruim', error))
*/

/*
Execute assim e terá o resultado de usuário e um erro pois não resolveu a Promisse da função obterVenda

obterUsuario()
    .then((resultdo)  => console.log(resultdo))
    .then((usuario) => obterVendaDoUsuario(usuario.id))
    .catch((error) => console.error('Deu ruim', error))
*/