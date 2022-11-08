/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(transaction);
    return true;
  }

  return false;
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(transaction);
    return true;
  }

  return false;
};

Account.prototype.getBalance = function () {
  var accBalance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      accBalance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      accBalance -= this.transactions[i].amount;
    }
  }
  if (accBalance === 0) {
    return 0;
  }
  return accBalance;
};
