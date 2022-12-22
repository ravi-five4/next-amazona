describe("Next Justdial", () => {
  it("Home Page", function () {
    //visit home page
    cy.visit("http://localhost:3000/");
    // check scroll
    cy.scrollTo("bottom", { easing: "swing" });
    // select any product to add to cart
  });
  it("Add Product to Cart ", function () {
    //visit home page
    cy.visit("http://localhost:3000/");
    // check scroll
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
    // since two items added to the cart
    cy.get(".m-1").contains("2").should("have.text", "2");
  });
});
