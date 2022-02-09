class Bank{
account_details={
    1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},
    1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
    1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
    1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
}
    validate(acno){
      return acno in this.account_details?true:false 
    }
    authenticate(accno,password){
        if(this.validate(accno)){

        
        let pwd=this.account_details[accno].password
        if(pwd==password){
            return "login success"
        }
        else{
            return "invalid"
        }
        } 
    }
    getBalance(acno){
        if(this.validate(acno)){
            return this.account_details[acno].balance
        }
        else{
            return "invalid account Number"
        }
    }
    fundTransfer(fromaccno,toaccno,amount)
    {
        if(this.validate(fromaccno) && this.validate(toaccno))
        {
            let avlbal=this.getBalance(fromaccno)
            if(avlbal>amount){
                this.account_details[fromaccno].balance-=amount

                 this.account_details[toaccno].balance+=amount
            }
            else{
                return "no sufficient balance"
            }
        }
        else{
            return "invalid account transcation failed"
        }
    }
}
var obj=new Bank()
console.log(obj.validate(1001));
console.log(obj.authenticate(1000,'userone'));
console.log(obj.fundTransfer(1000,1001,1500));
console.log(obj.getBalance(1001));
