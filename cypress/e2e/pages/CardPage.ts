interface PageObjects {
  labelCardNumber: () => Cypress.Chainable<JQuery<HTMLElement>>;
  labelCvv: () => Cypress.Chainable<JQuery<HTMLElement>>;
  labelExp: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

class CardPage {
  private elements: PageObjects = {
    labelCardNumber: () => cy.get('h4:contains("Card Number:-")'),
    labelCvv: () => cy.get('h4:contains("CVV:-")'),
    labelExp: () => cy.get('h4:contains("Exp:-")'),
  };

  // Valores que son necesarios para la compra en PaymentPage
  private cardNumberValue: string;
  private cvvValue: string;
  private monthValue: string;
  private yearValue: string;

  public getCardNumberValue(): string {
    return this.cardNumberValue;
  }

  public setCardNumberValue(cardNumberValue: string): void {
    this.cardNumberValue = cardNumberValue;
  }

  public getCvvValue(): string {
    return this.cvvValue;
  }

  public setCvvValue(cvvValue: string): void {
    this.cvvValue = cvvValue;
  }

  public getMonthValue(): string {
    return this.monthValue;
  }

  public setMonthValue(monthValue: string): void {
    this.monthValue = monthValue;
  }

  public getYearValue(): string {
    return this.yearValue;
  }

  public setYearValue(yearValue: string): void {
    this.yearValue = yearValue;
  }

  public getCardNumber(): void {
    this.elements
      .labelCardNumber()
      .invoke("text")
      .then((text) => {
        this.cardNumberValue = text.replace("Card Number:-  ", "");
        cy.log(this.cardNumberValue);
      });
  }

  public getCvv(): void {
    this.elements
      .labelCvv()
      .invoke("text")
      .then((text: string) => {
        this.cvvValue = text.trim().replace("CVV:-  ", "");
        cy.log(this.cvvValue);
      });
  }
  public getExp(): void {
    this.elements
      .labelExp()
      .invoke("text")
      .then((text: string) => {
        let array = text.replace("Exp:-  ", "").split("/");
        this.monthValue = array[0];
        this.yearValue = array[1];
        cy.log(this.monthValue);
        cy.log(this.yearValue);
      });
  }
}

export default new CardPage();
