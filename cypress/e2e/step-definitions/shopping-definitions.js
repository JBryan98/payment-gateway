const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import menuPage from "../../pages/menuPage";
import cardPage from "../../pages/cardPage";
import paymentPage from "../../pages/paymentPage";

Given("The source web page is operative", () => {
  cy.visit("/");
});

When("The card number is generated", () => {
  menuPage.clickGenerateCardNumber();
  cardPage.getCardNumber();
  cardPage.getCvv();
  cardPage.getExp();
  cy.go('back')
});

Then("selects the quantity of {string}", (quantity) => {
  menuPage.selectQuantity(quantity);
  menuPage.clickBuyNow();
})

Then("fill out the form with his card info", () => {
  paymentPage.setCardNumber(cardPage.cardNumber);
  paymentPage.setComboBoxMonth(cardPage.month);
  paymentPage.setComboBoxYear(cardPage.year);
  paymentPage.setCvv(cardPage.cvv)
})

Then("pays for the product", () => {
  paymentPage.clickBtnPay();
})

Then("the user will see the message {string}", (message) => {
  paymentPage.validateMessage(message);
})

