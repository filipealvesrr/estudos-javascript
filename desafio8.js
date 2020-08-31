const user = {
    nome : 'Mariana',
    transactions : [],
    balance : 0
};

function createTransaction(process){
    user.transactions.push(process)
    
    if(process.type == 'credit') {
        user.balance += process.value;
    } else {
            user.balance -= process.value;
        }
}

function getHigherTransactionByType(transaction) {   
    if(transaction == 'credit') {
        let bigger_value = 0;
        for(let i = 0; i < user.transactions.length; i++) {
            if(user.transactions[i].type == 'credit') {
                if(user.transactions[i].value > bigger_value) {
                    bigger_value = user.transactions[i].value;
                }
            }
        }
        console.log(`MAIOR TRANSAÇÃO DE CRÉDITO -> R$ ${bigger_value}`);
    } else {
        let bigger_value = 0;
        for(let i = 0; i < user.transactions.length; i++) {
            if(user.transactions[i].type == 'debit') {
                if(user.transactions[i].value > bigger_value) {
                    bigger_value = user.transactions[i].value;
                }
            }
        }
        console.log(`MAIOR TRANSAÇÃO DE DÈBITO -> R$ ${bigger_value}`);
    }
}

function getAverageTransactionValue() {
    let soma = 0;
    for(let i = 0; i < user.transactions.length; i++) {
        soma += user.transactions[i].value;
    }
    const media = soma / user.transactions.length;

    console.log(`A MÉDIA É DE -> R$ ${media}`);
}

function getTransactionsCount() {
    let count_credit = 0;
    let count_debit = 0;

    for(let i = 0; i < user.transactions.length; i++) {
        if(user.transactions[i].type == 'credit'){
            count_credit++;
        } else {
            count_debit++;
        }   
    }
    console.log(`QUANTIDADE DE TRANSAÇÕES DE CRÉDITO: ${count_credit}`);
    console.log(`QUANTIDADE DE TRANSAÇÕES DE DÉBITO: ${count_debit}`)
} 

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(`SALDO -> R$ ${user.balance}`);

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

getTransactionsCount(); 