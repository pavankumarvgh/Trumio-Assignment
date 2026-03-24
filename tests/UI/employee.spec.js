const { test, expect } = require('@playwright/test')
const LoginPage = require('../../pages/loginPage')
const PimPage = require('../../pages/pimPage')
const empData = require('../../testdata/employeeData.json')

test.describe('Employee Tests',()=>{

 test.beforeEach(async({page})=>{

  const login = new LoginPage(page)

  await page.goto('https://opensource-demo.orangehrmlive.com')

  await login.login('Admin','admin123')

 })

 test('Create Employee',async({page})=>{

  const pim = new PimPage(page)

  await pim.openPim()

  await pim.addEmployee(empData.firstName,empData.lastName)

  await expect(page.locator('text=Successfully Saved')).toBeVisible()

 })

 test('Search Employee',async({page})=>{

  const pim = new PimPage(page)

  await pim.openPim()

  await pim.searchEmployee(empData.firstName)

  await expect(page.locator('text='+empData.firstName)).toBeVisible()

 })

})