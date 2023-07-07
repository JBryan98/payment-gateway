interface PageObjects {
  inputCardNumber: () => Cypress.Chainable<JQuery<HTMLElement>>;
  cboxExpMonth: () => Cypress.Chainable<JQuery<HTMLElement>>;
  cboxYear: () => Cypress.Chainable<JQuery<HTMLElement>>;
  inputCvv: () => Cypress.Chainable<JQuery<HTMLElement>>;
  btnPay: () => Cypress.Chainable<JQuery<HTMLElement>>;
  lblMessage: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

class PaymentPage {
  elements: PageObjects = {
    inputCardNumber: () => cy.get("#card_nmuber"),
    cboxExpMonth: () => cy.get("#month"),
    cboxYear: () => cy.get("#year"),
    inputCvv: () => cy.get("#cvv_code"),
    btnPay: () => cy.get('input[type="submit"]'),
    lblMessage: () => cy.get(".table-wrapper > h2"),
  };

  public setCardNumber(cardNumber: string): void {
    this.elements.inputCardNumber().type(cardNumber);
  }

  public setComboBoxMonth(expirationMonth: string): void {
    this.elements.cboxExpMonth().select(expirationMonth);
  }

  public setComboBoxYear(expirationYear: string): void {
    this.elements.cboxYear().select(expirationYear);
  }

  public setCvv(cvv: string): void {
    this.elements.inputCvv().type(cvv);
  }

  public clickBtnPay(): void {
    this.elements.btnPay().click();
  }

  public validateMessage(message: string): void {
    this.elements
      .lblMessage()
      .invoke("text")
      .then((text: string) => expect(text).to.eq(message));
  }
}

export default new PaymentPage();
