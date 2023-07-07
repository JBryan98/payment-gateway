interface PageObjects {
  linkGenerateCardNumber: () => Cypress.Chainable<JQuery<HTMLElement>>;
  cboxQuantity: () => Cypress.Chainable<JQuery<HTMLElement>>;
  btnBuyNow: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

class MenuPage {
  elements: PageObjects = {
    linkGenerateCardNumber: () => cy.get("#nav > a:nth-child(2)"),
    cboxQuantity: () => cy.get('select[name="quantity"]'),
    btnBuyNow: () => cy.get('input[value="Buy Now"]'),
  };

  clickGenerateCardNumber(): void {
    this.elements
      .linkGenerateCardNumber()
      .invoke("removeAttr", "target")
      .click();
  }

  //Si quantity fuese number, el metodo select() en lugar del texto del combobox, tomaría el index
  selectQuantity(quantity: string): void {
    this.elements
      .cboxQuantity()
      .select(quantity)
      .invoke("val")
      .should("eq", quantity);
  }

  clickBuyNow(): void {
    this.elements.btnBuyNow().click();
  }
}

export default new MenuPage();
