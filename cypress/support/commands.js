// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from "@faker-js/faker";
Cypress.Commands.add('registerMethod',()=>{
    const userEmail = faker.internet.email();

    cy.visit("/");
    cy.get("a[href='/auth/register'].mr-2").click();

    // firstname
    cy.get("#registration_form_firstname").type("omer", { force: true });

    // lastname
    cy.get("#registration_form_lastname").type("ali", { force: true });

    // email
    cy.get("#registration_form_email").type(userEmail, { force: true });

    // password
    cy.get("#registration_form_plainPassword").type("asdASD123,", {
      force: true,
    });

    // confirm password
    cy.get("#registration_form_confirmPassword").type("asdASD123,", {
      force: true,
    });

    // submit
    cy.get(".btn").click();

    // should / cypress assertion
    // gozukuyor mu assertion yap
    cy.get(".Toastify__toast-container").should("be.visible");

    // gelen mesaj dogru mu
    cy.get(".Toastify__toast-container").should("have.text", "Welcome!");

    // expect
    // cy.get('.Toastify__toast-container').getText() -> webelementin yazinisi verirdi

    // yanlis kullanim  const toast = cy.get('.Toastify__toast-container').invoke('text')
    cy.get(".Toastify__toast-container")
      .invoke("text")
      .then((toast) => {
        expect(toast).to.equal("Welcome!");
      });
})