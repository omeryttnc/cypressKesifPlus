import { faker } from "@faker-js/faker";
// ES6 oncesi method olusturma
export const registerReadymethod = () => {
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
};

// ES6 sonrasi method olusturma
const registerMethodNewStyle = () => {
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
};

const createFakeDataForRegistration = () => {

  cy.writeFile('cypress/fixtures/registerFakeData.json',{
    "firstName":"omer",
    "lastName":`${faker.internet.userName()}`,
    "email":`${faker.internet.email()}`,
    "plainPassword":"fQy*s5YinpE**ia",
    "confirmPassword":"fQy*s5YinpE**ia"
})
};

export default {
  registerMethodNewStyle,
  createFakeDataForRegistration
};
