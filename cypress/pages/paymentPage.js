class PaymentPage {
  elements = {
    inputCardNumber: () => cy.get("#card_nmuber"),
    cboxExpMonth: () => cy.get("#month"),
    cboxYear: () => cy.get("#year"),
    inputCvv: () => cy.get("#cvv_code"),
    btnPay: () => cy.get('input[type="submit"]'),
    lblMessage: () => cy.get(".table-wrapper > h2"),
  };

  setCardNumber(cardNumber) {
    this.elements.inputCardNumber().type(cardNumber);
  }

  setComboBoxMonth(expirationMonth) {
    this.elements.cboxExpMonth().select(expirationMonth);
  }

  setComboBoxYear(expirationYear) {
    this.elements.cboxYear().select(expirationYear);
  }

  setCvv(cvv) {
    this.elements.inputCvv().type(cvv);
  }

  clickBtnPay() {
    this.elements.btnPay().click();
  }

  validateMessage(message) {
    this.elements
      .lblMessage()
      .invoke("text")
      .then((text) => expect(text).to.eq(message));
  }
}

export default new PaymentPage();
