class cardPage {
  elements = {
    labelCardNumber: () => cy.get('h4:contains("Card Number:-")'),
    labelCvv: () => cy.get('h4:contains("CVV:-")'),
    labelExp: () => cy.get('h4:contains("Exp:-")'),
  };

  static cardNumber = "";
  static cvv = "";
  static month = "";
  static year = "";

  getCardNumber() {
    this.elements
      .labelCardNumber()
      .invoke("text")
      .then((text) => {
        this.cardNumber = text.replace("Card Number:-  ", "");
        cy.log(this.cardNumber);
      });
  }

  getCvv() {
    this.elements
      .labelCvv()
      .invoke("text")
      .then((text) => {
        this.cvv = text.trim().replace("CVV:-  ", "");
        cy.log(this.cvv);
      });
  }
  getExp() {
    this.elements
      .labelExp()
      .invoke("text")
      .then((text) => {
        let array = text.replace("Exp:-  ", "").split("/");
        this.month = array[0];
        this.year = array[1];
        cy.log(this.month);
        cy.log(this.year);
      });
  }
}

export default new cardPage();
