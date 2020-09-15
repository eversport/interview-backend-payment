import Stripe from 'stripe';
import { Payment, PaymentState, PaymentMethod } from './payment.model'
import { PaymentRepository } from './payment.repository';

export class PaymentService {
  client: Stripe
  constructor(
    private readonly paymentRepository: PaymentRepository = new PaymentRepository(),
  ) {
    this.client = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2020-08-27',
    })
  }

  /**
   * create a payment
   * https://stripe.com/docs/api/charges
   * @param {string} customer - the id of the stripe customer
   * @param {number} amount - the amount of the payment
   * @param {string} paymentMethod - either 'creditcard', 'sofort' or 'sepa'
   * @param {currency} currency - the currency of the payment
   * 
   * 1. initialise a payment at stripe
   * 2. create a new Payment in our system and persist it (with the help of the repository)
   */
  async createPayment() {}

}