export enum PaymentState {
  OPEN = 'open',
  IN_PROGRESS = 'in-progress',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export type PaymentMethod = 'creditcard' | 'sofort' | 'sepa'

export class Payment {
  public id: number
  public externalId: string
  public state: PaymentState
  public amount: number
  public fee: number
  public paymentMethod: PaymentMethod
  public date: Date
  public currency: 'eur'
  public customer: string
}