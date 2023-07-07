interface PageObjects {
  linkGenerateCardNumber: () => Cypress.Chainable<JQuery<HTMLElement>>;
  cboxQuantity: () => Cypress.Chainable<JQuery<HTMLElement>>;
  btnBuyNow: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

class MenuPage {
  private elements: PageObjects = {
    linkGenerateCardNumber: () => cy.get("#nav > a:nth-child(2)"),
    cboxQuantity: () => cy.get('select[name="quantity"]'),
    btnBuyNow: () => cy.get('input[value="Buy Now"]'),
  };

  public clickGenerateCardNumber(): void {
    this.elements
      .linkGenerateCardNumber()
      .invoke("removeAttr", "target")
      .click();
  }

  //Si quantity fuese number, el metodo select() en lugar del texto del combobox, tomaría el index
  public selectQuantity(quantity: string): void {
    this.elements
      .cboxQuantity()
      .select(quantity)
      .invoke("val")
      .should("eq", quantity);
  }

  public clickBuyNow(): void {
    this.elements.btnBuyNow().click();
  }
}

export default new MenuPage();
