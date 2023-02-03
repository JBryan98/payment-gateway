import { After, Before } from "@badeball/cypress-cucumber-preprocessor/lib/methods";

Before(() => {
    cy.log("Inciando el test")
})

After(() => {
    cy.clearAllCookies();
})
