const { getUser, getSaleByUser, getCreditByUser } = require('./promises');

const normalFecthData = async () => {
    console.time("Tempo da função normal: ");
    const user = await getUser();
    const sale = await getSaleByUser(user.id);
    const credit = await getCreditByUser(user.id);

    console.log("\nUsuário: ", `ID: ${user.id} / Nome: ${user.name} / E-mail: ${user.email}`);
    console.log("Venda: ", `ID: ${sale.id} / Loja: ${sale.store} / Valor: ${sale.value}`);
    console.log("Saldo: ", `ID: ${credit.id} / Agência: ${credit.agency} / Saldo: ${credit.credit}\n`);
    console.timeEnd("Tempo da função normal: ");
}

const fecthDataWithParallelism = async () => {
    console.time("Tempo da função com paralelismo: ");
    const user = await getUser();
    const [sale, credit] = await Promise.all([
        getSaleByUser(user.id),
        getCreditByUser(user.id)
    ])

    console.log("\nUsuário: ", `ID: ${user.id} / Nome: ${user.name} / E-mail: ${user.email}`);
    console.log("Venda: ", `ID: ${sale.id} / Loja: ${sale.store} / Valor: ${sale.value}`);
    console.log("Saldo: ", `ID: ${credit.id} / Agência: ${credit.agency} / Saldo: ${credit.credit}\n`);
    console.timeEnd("Tempo da função com paralelismo: ");
}

normalFecthData();

fecthDataWithParallelism();
