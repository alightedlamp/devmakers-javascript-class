function calculateBillTotal(preTaxAndTipAmount) {
  return preTaxAndTipAmount + ((preTaxAndTipAmount * .095) + (preTaxAndTipAmount * .15));
}