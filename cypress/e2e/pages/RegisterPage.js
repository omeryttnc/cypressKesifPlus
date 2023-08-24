class RegisterPage {
  elements = {
    registerButton: () => cy.get("a[href='/auth/register'].mr-2"),
    firstName: () => cy.get("#registration_form_firstname"),
    lastName: () => cy.get("#registration_form_lastname"),
    email: () => cy.get("#registration_form_email"),
    password: () => cy.get("#registration_form_plainPassword"),
    confirmPassword: () => cy.get("#registration_form_confirmPassword"),
    submit: () => cy.get(".btn"),
    toast: ()=>cy.get(".Toastify__toast-container"),
  };

  registerMethod(email) {
    cy.visit("/");
    this.elements.registerButton().click();
    this.elements.firstName().type("omer", { force: true });
    this.elements.lastName().type("ali", { force: true });
    this.elements.email().type(email,{force:true});
    this.elements.password().type("asdASD123,", { force: true });
    this.elements.confirmPassword().type("asdASD123,", { force: true });
    this.elements.submit().click();
  }
}

export const registerPage = new RegisterPage()
