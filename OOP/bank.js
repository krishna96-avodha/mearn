// class:bank
// createaccount()
// withdrow()
// deposit()
// balanceEnquiry()
class Bank{
    createAccount(acno,pname,pan,branch,phone,bal){
        this.accountNumber=acno;
        this.personName=pname;
        this.pan=pan;
        this.branch=branch;
        this.phon=phone;
        this.bal=bal;
    }
    withdraw(amount){
        if(amount>this.bal){
            console.log(`transaction failed.. insufficient balane on ur ${this.accountNumber}`);
        }
        else{
            this.bal-=amount;
            console.log(`your account ${this.accountNumber} has been debited with the amount ${amount} and available balance is ${this.bal}`);
        }

    }
    deposit(amount){
    this.bal+=amount;
    console.log(`your account ${this.accountNumber} has been credited with the amount ${amount} and available balance is ${this.bal}`);
    }
    balanceEnquiry()
    {
        console.log(`your availbale balance is:${this.bal}`);

    }
}
var bank=new Bank();
bank.createAccount(10002,"Arun",12435672,"Kasargod",987657682,65000);
bank.withdraw(15000);
// bank.deposit(35000);
bank.balanceEnquiry()