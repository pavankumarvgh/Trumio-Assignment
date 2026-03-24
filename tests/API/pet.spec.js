const { test, expect } = require('@playwright/test')
const petData = require('../../testdata/petData.json')

test('Add Pet',async({request})=>{

 const response = await request.post('https://petstore.swagger.io/v2/pet',{

  data:petData

 })

 expect(response.status()).toBe(200)

})

test('Find Pet By ID',async({request})=>{

 const response = await request.get(`https://petstore.swagger.io/v2/pet/${petData.id}`)

 expect(response.status()).toBe(200)

})

test('Update Pet',async({request})=>{

 const response = await request.put('https://petstore.swagger.io/v2/pet',{

  data:{
   id:petData.id,
   name:'DoggieUpdated',
   status:'sold'
  }

 })

 expect(response.status()).toBe(200)

})

test('Delete Pet',async({request})=>{

 const response = await request.delete(`https://petstore.swagger.io/v2/pet/${petData.id}`)

 expect(response.status()).toBe(200)

})