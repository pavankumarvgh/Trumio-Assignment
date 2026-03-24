class PimPage {

 constructor(page){
  this.page = page
 }

 pimMenu = 'text=PIM'
 addEmployeeBtn = 'text=Add'
 firstName = 'input[name="firstName"]'
 lastName = 'input[name="lastName"]'
 saveBtn = 'button[type="submit"]'
 employeeList = 'text=Employee List'
 searchEmployeeName = 'input[placeholder="Type for hints..."]'
 searchBtn = 'button:has-text("Search")'
 deleteBtn = 'button:has-text("Delete")'

 async openPim(){

  await this.page.click(this.pimMenu)

 }

 async addEmployee(first,last){

  await this.page.click(this.addEmployeeBtn)
  await this.page.fill(this.firstName,first)
  await this.page.fill(this.lastName,last)
  await this.page.click(this.saveBtn)

 }

 async searchEmployee(name){

  await this.page.click(this.employeeList)
  await this.page.fill(this.searchEmployeeName,name)
  await this.page.click(this.searchBtn)

 }

}

module.exports = PimPage