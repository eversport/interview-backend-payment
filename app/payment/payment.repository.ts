import { Payment } from './payment.model'
import { v4 as uuidv4 } from 'uuid';

export class PaymentRepository {
  async save(payment: Payment) {
    payment.id = uuidv4()
    return payment
  }
}