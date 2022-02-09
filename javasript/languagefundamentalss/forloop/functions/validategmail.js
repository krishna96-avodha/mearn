function ValidateGmail(email){
    return email.endsWith('@gmail.com')?'valid':'not valid'

}
console.log(ValidateGmail('krishna@gmail.com'));