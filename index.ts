import { PaymentService } from './app/payment/payment.service';

const execute = async () => {
  const paymentService = new PaymentService();
  // @ts-ignore
  return paymentService.createPayment({
    customer: 'test_customer',
    currency: 'eur',
    paymentMethod: 'creditcard',
    amount: 1000,
  });
}

execute().then(payment => console.log(payment))

