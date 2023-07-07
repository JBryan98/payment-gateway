import { After, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.log("Inciando el test");
});

After(() => {
  cy.clearAllCookies();
});
