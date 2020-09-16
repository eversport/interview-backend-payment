# interview-backend-payment

## TASKS
### 1. Refactor legacy calculate online payment fee function 
You can find a javascript function called calculateOnlinePaymentFee.js in the app-legacy folder. 
- This function has to be refactored to typescript.
- Also think about where you want to implement this logic within the app folder.
- Maybe you can also improve the function with modern coding style

### 2. Implement a function that creates a payment
Implement a "createPayment" function in the payment service. 
- This function should be able to take the following parameters:
```ts
const customer: string // id of a stripe customer entity
const amount: number // amount in euro cent
const paymentMethod: 'creditcard' | 'sepa' | 'sofort'
const currency: string // the currency code
```
- Create a charge with the help of the stripe client which is already initiated in the constructor. You can use the stripe api documentation to figure out how to create a charge at stripe (https://stripe.com/docs/api)
- Persist the payment by using the payment model and the repository

## QUESTIONS
1. What would you test in our small application?
2. What does "Separation of concerns" means in software development?
3. Create a Model (with typescript interfaces/types/enums) of an invoice
