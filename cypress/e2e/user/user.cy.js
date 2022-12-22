const { data } = require("autoprefixer");

describe("Next Justdial", function () {
  before(() => {
    cy.fixture("user").then(function (data) {
      this.data = data;
      // this means data reference
    });
    cy.visit("http://localhost:3000/");
    cy.clearCookies();
    cy.clearAllSessionStorage();
  });
  it("Register New account and Logout", function () {
    // get log in  element to register new account
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
    // verify url after submission of form
    cy.url().should("eq", "http://localhost:3000/");
    // click on user to pop up menu
    cy.contains(this.data.name).click();
    // log out user
    cy.get(".dropdown-link").contains("Logout").click();
  });

  it("Login with valid credentials", function () {
    // visit home page
    cy.visit("http://localhost:3000/");
    // find login keyword to login using valid credentials
    cy.get(".p-2").contains("Login").click();
    // expected url should include login keyword
    cy.url().should("include", "login");
    // url assertions
    cy.url().should("eq", "http://localhost:3000/login");
    // Input field Email
    cy.get("#email").should("have.attr", "type", "email").type(this.data.email);
    // input field password
    cy.get("#password").type(this.data.password);
    // cy.get('form').submit();
    cy.get("form").submit();
    // verify url after submission of form
    cy.url().should("eq", "http://localhost:3000/");
  });
});
