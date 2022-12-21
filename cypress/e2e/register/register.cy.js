const { data } = require("autoprefixer");

describe("example to-do app", function () {
  before(() => {
    cy.fixture("user").then(function (data) {
      this.data = data;
      // this means data reference
    });
    cy.visit("http://localhost:3000/");
  });
  it("Register New account", function () {
    // all cookies clear
    cy.clearCookies();
    cy.clearAllSessionStorage();
    // get log in  element to register
    cy.get(".p-2").contains("Login").click();
    // expected url should include login keyword
    cy.url().should("include", "login");
    //check and equate expected url is or not
    cy.url().should("eq", "http://localhost:3000/login");
    // to create new account click on register
    cy.get("#register > a ").contains("Register").click();
    // after click on register it should be on register page
    cy.url().should("include", "login");
    // expected url for register page
    cy.url().should("eq", "http://localhost:3000/register?redirect=/");
    // form test
    // Input field Name
    cy.get("#name").should("have.attr", "type", "text").type(this.data.name);
    // Input field Email
    cy.get("#email").should("have.attr", "type", "email").type(this.data.email);
    // input field password
    cy.get("#password").type(this.data.password);
    // input Confirm password
    cy.get("#confirmPassword").type(this.data.confirmPassword);
    // cy.get('form').submit();
    cy.get("form").submit();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
