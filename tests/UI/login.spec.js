const { test, expect } = require('@playwright/test')
const LoginPage = require('../../pages/loginPage')
const DashboardPage = require('../../pages/dashboardPage.js')

test.describe('Login Tests',()=>{

 test('Valid Login',async({page})=>{

  const login = new LoginPage(page)

  await page.goto('https://opensource-demo.orangehrmlive.com')

  await login.login('Admin','admin123')
  await waitfortimeout(5000)

  await expect(page).toHaveURL(/dashboard/)

 })

 test('Invalid Login',async({page})=>{

  const login = new LoginPage(page)

  await page.goto('https://opensource-demo.orangehrmlive.com')

  await login.login('Admin','wrongpass')
    await waitfortimeout(5000)


  await expect(page.locator('.oxd-alert-content-text')).toBeVisible()

 })

 test('Logout Test',async({page})=>{

  const login = new LoginPage(page)
  const dashboard = new DashboardPage(page)

  await page.goto('https://opensource-demo.orangehrmlive.com')

  await login.login('Admin','admin123')
    await waitfortimeout(5000)

  await dashboard.logout()

  await expect(page).toHaveURL(/login/)

 })

})