const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                id: 1,
                name: 'Felipe',
                email: 'felipe@email.com.br'
            })
        }, 1000);
    })
}

const getSaleByUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return userId ? resolve({
                id: 10,
                store: 'Azamon',
                value: 5000.00
            }) : reject({ error: "ID do usuário inválido" })
        }, 2000);
    })
}

const getCreditByUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return userId ? resolve({
                id: 100,
                agency: '356498',
                digit: 2,
                credit: 1325000.00
            }) : reject({ error: "ID do usuário inválido" })
        }, 3000);
    })
}

/*
getUser()
    .then((user) => console.log('Usuário: ', `ID: ${user.id} / Nome: ${user.name} / E-mail: ${user.email}`))
    .catch((error) => console.error(error));

getUser()
    .then((user) => getSaleByUser(user.id))
    .then((sale) => console.log('Venda: ', `ID: ${sale.id} / Loja: ${sale.store} / Valor: ${sale.value}`)) // We don't have acess to user in this line;
    .catch((error) => console.error(error));

getUser()
    .then((user) => getSaleByUser(user.id)
        .then((sale) => {
            console.log("\n\nUsuário: ", `ID: ${user.id} / Nome: ${user.name} / E-mail: ${user.email}`);
            console.log("\nVenda: ", `ID: ${sale.id} / Loja: ${sale.store} / Valor: ${sale.value}\n\n`);
        }))
    .catch((error) => console.error(error));
*/

module.exports = { getUser, getSaleByUser, getCreditByUser };
