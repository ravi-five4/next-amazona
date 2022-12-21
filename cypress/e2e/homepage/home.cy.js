describe("My first test", () => {
  it("Home Page", () => {
    cy.visit("http://localhost:3000/");
    expect(true).to.equal(true);
  });
});
