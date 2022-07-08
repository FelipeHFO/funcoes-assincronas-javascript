const getUser = (callback) => {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            name: 'Felipe',
            email: 'felipe@email.com.br'
        })
    }, 1000);
}

const getSaleByUser = (userId, callback) => {
    setTimeout(() => {
        return userId ? callback(null, {
            id: 10,
            store: 'Azamon',
            value: 5000.00
        }) : callback({ saleError: "ID do usuário inválido!" }, null)
    }, 1000);
}

const callbackGetUser = (userError, user) => {
    if(userError){
        console.error("Error Callback GetUser - ", userError)
        return;
    }

    console.log("\n\nUsuário: ", `ID: ${user.id} / Nome: ${user.name} / E-mail: ${user.email}`)
    getSaleByUser(user.id, callbackGetSaleByUser);
}

const callbackGetSaleByUser = (saleError, sale) => {
    if(saleError){
        console.error("Error Callback GetSaleByUser - ", saleError)
        return;
    }

    console.log("\nVenda: ", `ID: ${sale.id} / Loja: ${sale.store} / Valor: ${sale.value}\n\n`);
}

getUser(callbackGetUser);
