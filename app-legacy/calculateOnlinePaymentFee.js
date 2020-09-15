/**
 * calculate the online payment fee for a payment
 * @param {Object} payment - the payment object (REQUIRED)
 * @param {Array} rates - an array of rates (OPTIONAL)
 * 
 */
const calculateOnlinePaymentFee = (payment, rates) => {
  const defaultRates = [
    { paymentMethod: 'creditcard', rate: 1 },
    { paymentMethod: 'sepa', rate: 0.5 },
    { paymentMethod: 'sofort', rate: 2 }
  ]

  // if no rates are passed to the function, use the default rates
  const usedRates = rates || defaultRates

  // get the right rate base on the paymentService of the payment
  const rate = usedRates.find(rate => rate.paymentMethod === payment.paymentMethod)
  if (!rate) {
    throw new Error(`no rate found for paymentService ${payment.paymentMethod}`)
  }

  return {
    feeAmount: Math.round((payment.amount / 100) * rate.rate),
    rate: rate
  }
}

module.exports = { calculateOnlinePaymentFee }