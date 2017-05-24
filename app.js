console.log('Starting Password Manager');

var storage = require('node-persist');
storage.initSync();

//account.name Facebook
//account.username User123!
//account.password Password123!

function createAccount(account) {
    var accounts = storage.getItemSync('accounts');

    if(typeof accounts === 'undefined'){
        accounts = [];
    }

    accounts.push(account);
    storage.setItemSync('accounts',accounts);

    return account;
}

function getAccount(accountName) {
    //var accounts use getItemSync
    var accounts = storage.getItemSync('accounts');

    var matchedAccount;

    //iterate over array, return matching account, else undefined
    accounts.forEach(function(account) {
        if(account.name == accountName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

createAccount({
    name: 'Facebook',
    username: 'someemail@gmail.com',
    password: '123!'
});

var facebookAccount = getAccount('Facebook');
console.log(facebookAccount);





