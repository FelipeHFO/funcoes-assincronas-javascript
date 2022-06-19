/**
 * resolverUsuario -> Função callback
 * Somente passamos a assinatura da função.
 * Iremos executar ela somente dentro da função que ela foi passada.
 * Por padrão o callback é passado sempre no último parâmetro.
 */

function obterUsuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            name: 'Felipe',
            lastName: 'Oliveira'
        })
    }, 1000);
}

function resolverUsuario(error, usuario){
    if(error){
        console.error('Deu ruim em usuário', error)
        return;
    }
    console.log('Usuário', usuario);
}

obterUsuario(resolverUsuario);
