import { faker } from "@faker-js/faker";
import { registerPage } from "../pages/Registerpage";
import browserUtilitiesYeni from "../../support/BrowserUtilities";
describe("cypress tanitimlari 2 gun", () => {
  it("register test 1", () => {
    // Faker faker = new Faker() ->> java
    // faker.
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

    // Assert.assertEquals("expected","actual");
  });

  it("register test 2 xpath kullanarak", () => {
    // Faker faker = new Faker() ->> java
    // faker.
    const userEmail = faker.internet.email();

    cy.visit("/");
    cy.xpath("//a[text()='Register']").click();

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

    // Assert.assertEquals("expected","actual");
  });

  it("test 3 method kullanarak", () => {
    const userEmail = faker.internet.email();
    registerPage.registerMethod(userEmail);

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

    // Assert.assertEquals("expected","actual");
  });

  it("test 4 pom kullanarak", () => {
    const userEmail = faker.internet.email();
    registerPage.registerMethod(userEmail);

    // should / cypress assertion
    // gozukuyor mu assertion yap
    // way 1
    cy.get(".Toastify__toast-container").should("be.visible");

    // way 2 pom ile
    registerPage.elements.toast().should("be.visible");

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

    // Assert.assertEquals("expected","actual");
  });

  it.only("test 5, eski yontem method olusturma", () => {

    const browserUtilities = require('../../support/BrowserUtilities')
    browserUtilities.registerReadymethod()

  });

  it("test 6, yeni yontem method olusturma", () => {

   
    browserUtilitiesYeni.registerMethodNewStyle()

  });

  it('test 7 cypress komutu olarak kullanma',()=>{
    cy.registerMethod()
  })


});
