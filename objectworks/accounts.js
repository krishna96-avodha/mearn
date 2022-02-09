var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]


  //  q1  total number accounts
// console.log(accounts.length);
   
//q2  print all account numbers whose ac-type savings
// accounts.filter(acdetails=>acdetails.ac_type=="savings").forEach(data=>console.log(data.acno))

//q3 print balance of acno=1000
// var bal=accounts.find(ac=>ac.acno=="1000").balance
// console.log(bal);



//q4 print all g-pay transaction details

// var allTransactions=accounts.map(data=>data.transactions).flat().filter(data=>data.method=="phone-pay")
// console.log(allTransactions);

          // print all transactions whose transactions amount>500

// allTransactions=accounts.map(data=>data.transactions).flat().filter(data=>data.amount>500)
// console.log(allTransactions);

          //q4 print credit transcation's of 1002

creditTransactions=accounts.map(data=>data.transactions).flat().filter(data=>data.to==1002)
console.log(creditTransactions);

          //q4 print debit transcation's of 1002

debitTransactions=accounts.find(data=>data.acno=1002).transactions
console.log(debitTransactions);


          //q5 print highest balance account details
  // var highbalacc=accounts.map(data=>data.balance).reduce((p1,p2)=>p1>p2?p:p2)
  // console.log(highbalacc);



//q6 print transaction history of 1002
// var transactionHistory={debitTran:debitTransactions,creditTrans:creditTransactions}

// console.log(transactionHistory);
var transactionHistory=[...creditTransactions,...debitTransactions]
console.log(transactionHistory);

// var transactionHistory=[]
// for (let t of creditTransactions){
//   transactionHistory.push(t)
// }
// for(let t of debitTransactions)(
//   transactionHistory.push(t)
// )
// console.log(transactionHistory);