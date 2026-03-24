const { test, expect } = require('@playwright/test')

const orderId = 900

test('Place Order',async({request})=>{

 const response = await request.post('https://petstore.swagger.io/v2/store/order',{

  data:{
   id:orderId,
   petId:101,
   quantity:1,
   status:'placed',
   complete:true
  }

 })

 expect(response.status()).toBe(200)

})

test('Find Order',async({request})=>{

 const response = await request.get(`https://petstore.swagger.io/v2/store/order/${orderId}`)

 expect(response.status()).toBe(200)

})

test('Delete Order',async({request})=>{

 const response = await request.delete(`https://petstore.swagger.io/v2/store/order/${orderId}`)

 expect(response.status()).toBe(200)

})