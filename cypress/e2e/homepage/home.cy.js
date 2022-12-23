describe("Next Justdial", () => {
  beforeEach("Justdial", function () {
    //visit home page
    cy.visit("http://localhost:3000/");
  });
  it("Home Page ", function () {
    // check scroll
    cy.scrollTo("bottom", { easing: "swing" });
  });
  it.skip("product Description", function () {
    //product Description 1
    cy.get(".card").eq(1).should("be.visible").click();
    cy.url().should("contain", "product");
    // go back to Home page
    cy.get(".py-2").contains(" back to products").click();
    //product Description 2
    cy.get(".card").eq(2).click();
    cy.get(".py-2").contains(" back to products").click();
  });
  it("Add Product to Cart ", function () {
    //product 1
    cy.get(".card").eq(1).click();
    cy.url().should("contain", "product");
    cy.get(".card").contains("Add to Cart").click();
    cy.url().should("include", "cart");
    cy.url().should("eq", "http://localhost:3000/cart");
    cy.get(".text-lg").contains("Justdial").click();
    // go back to Home page
    cy.scrollTo("bottom", { easing: "swing" });
    // select any product to add to cart like product at index 2
    cy.get("button[type=button]").eq(2).click();
    // select any product to add to cart like product at index 1
    cy.get("button[type=button]").eq(1).click();
    // check toast pop up whether it's coming or not.
    cy.get(".Toastify", { timeout: 10000 }).should(
      "have.text",
      "Product added to the cart"
    );
    // since 3 items added to the cart
    cy.get(".m-1").contains("3").should("have.text", "3");
    // click on cart button for checkout
    cy.get("a.px-2").click();
    // go to home page then again visit cart page
    cy.get(".text-lg").contains("Justdial").click();
    cy.url().should("eq", "http://localhost:3000/");
    // cart page
    cy.get("a.px-2").click();
    cy.url().should("include", "cart");
    cy.url().should("eq", "http://localhost:3000/cart");
    // remove product from cart
    cy.get("tr").eq(2).get("button").eq(1).click();
    // increase no of quantity from cart
    cy.get("tr").eq(1).find("select").select("3").should("have.value", 3);
    cy.get(".Toastify", { timeout: 10000 }).should(
      "have.text",
      "Product Updated in the cart"
    );
    // decrease no of quantity from cart
    cy.get("tr").eq(1).find("select").select("2").should("have.value", "2");
    cy.get(".primary-button").contains("Check Out").click();
  });
});
