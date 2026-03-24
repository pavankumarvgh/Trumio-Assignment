class DashboardPage{

 constructor(page){
  this.page = page
 }

 profileIcon = '.oxd-userdropdown-icon'
 logoutBtn = 'text=Logout'

 async logout(){

  await this.page.click(this.profileIcon)
  await this.page.click(this.logoutBtn)

 }

}

module.exports = DashboardPage