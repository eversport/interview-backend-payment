# interview-backend-payment

## TASKS
### 1. Refactor legacy calculate online payment fee function 
You can find a javascript function called calculateOnlinePaymentFee.js in the app-legacy folder. This function must be moved to the right place om tje app folder and refactored to typescript

### 2. Implement a function that creates a payment
Implement a function at the right place in the app folder in typescript, that:
- takes a customerId, an amount, a payment method and a currency and creates a charge at stripe
- creates a system payment and persist it

## QUESTIONS
1. What would you test in our small application?
2. Testing Pyramid?
3. What does "Separation of concerns" means in software development?
4. Create a Model (with typescript interfaces/types/enums) of an invoice
