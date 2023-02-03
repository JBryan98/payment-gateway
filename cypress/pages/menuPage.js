class menuPage{
    elements = {
        linkGenerateCardNumber: () => cy.get('#nav > a:nth-child(2)'),
        cboxQuantity: () => cy.get('select[name="quantity"]'),
        btnBuyNow: () => cy.get('input[value="Buy Now"]')
    }

    clickGenerateCardNumber(){
        this.elements.linkGenerateCardNumber()
        .invoke("removeAttr", "target")
        .click();
    }

    selectQuantity(quantity){
        this.elements.cboxQuantity()
        .select(quantity)
        .invoke('val')
        .should('eq', quantity);
    }

    clickBuyNow(){
        this.elements.btnBuyNow().click();
    }
}

export default new menuPage();