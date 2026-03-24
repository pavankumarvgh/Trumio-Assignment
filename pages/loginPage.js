class LoginPage {

 constructor(page){
  this.page = page
 }

 username = 'input[name="username"]'
 password = 'input[name="password"]'
 loginBtn = 'button[type="submit"]'
 errorMsg = '.oxd-alert-content-text'

 async login(user,pass){

  await this.page.fill(this.username,user)
  await this.page.fill(this.password,pass)
  await this.page.click(this.loginBtn)

 }

}

module.exports = LoginPage