import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import MenuPage from "../pages/MenuPage";
import CardPage from "../pages/CardPage";
import PaymentPage from "../pages/PaymentPage";

Given("The source web page is operative", () => {
  cy.visit("/");
});

When("The card number is generated", () => {
  MenuPage.clickGenerateCardNumber();
  CardPage.getCardNumber();
  CardPage.getCvv();
  CardPage.getExp();
  cy.go("back");
});

Then("selects the quantity of {string}", (quantity: string) => {
  MenuPage.selectQuantity(quantity);
  MenuPage.clickBuyNow();
});

Then("fill out the form with his card info", () => {
  PaymentPage.setCardNumber(CardPage.getCardNumberValue());
  PaymentPage.setComboBoxMonth(CardPage.getMonthValue());
  PaymentPage.setComboBoxYear(CardPage.getYearValue());
  PaymentPage.setCvv(CardPage.getMonthValue());
});

Then("pays for the product", () => {
  PaymentPage.clickBtnPay();
});

Then("the user will see the message {string}", (message: string) => {
  PaymentPage.validateMessage(message);
});
