console.log('Starting Password Manager');

var storage = require('node-persist');
storage.initSync();

//account.name Facebook
//account.username User123!
//account.password Password123!

function createAccount(account) {
    var accounts = storage.getItemSync('accounts');

    //if accounts is undefined (use typeof)
    // set accounts = []

    //push on new account

    //return account
}




