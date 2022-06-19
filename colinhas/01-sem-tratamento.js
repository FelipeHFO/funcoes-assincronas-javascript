/**
 * Exemplo para mostrar uma função assíncrona sem os devidos tratamentos.
 * setTimeout -> Função assícronca.
 * console.log(usuario) -> Executa antes da função terminar.
 */

function obterUsuario(){
    setTimeout(function () {
        return {
            id: 1,
            name: 'Felipe',
            lastName: 'Oliveira'
        }
    }, 1000);
}

const usuario = obterUsuario();
console.log(usuario);