module.exports = function account() {
  var output = {}
  var customerAccount = {
    balance: 1000,
    name: 'Azat Mardan',
    checking: '1',
    type: ''
  }

  function setAccountType () {
    if (customerAccount.checking === '1') {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250
  deposit = 1000

  var openAccount = function(account, deposit) {
    debugger
    account.balance += signupBonus
    output['New balance after signup bonus is '] = signupBonus
  }

  output["Account before opening"] = customerAccount

  openAccount(customerAccount)
  setAccountType()
  output['Account after opening'] = customerAccount
  return output
}

 