/**
 *
 * prototypes
 */
function Customer(name, balance, accNo) {
    this.BankName = "SBIN";
    this.name = name;
    this.balance = balance;
    this.accountNo = accNo;
}

Customer.prototype.checkBalance = function () {
    return `The balance is INR ${
        this.balance
    } as on ${new Date().toLocaleString()}`;
};

Customer.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
    return `U deposited amount of ${amount} sucessfull and your current balance is ${this.balance}`;
};

const customer1 = new Customer("John", 1000, "ACC1234");
const customer2 = new Customer("John2", 10001, "ACC12345");

console.log(customer1.checkBalance());
console.log(customer2.checkBalance());
console.log(customer2.deposit(20050));
