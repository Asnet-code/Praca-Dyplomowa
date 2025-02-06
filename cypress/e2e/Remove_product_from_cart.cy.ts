describe("Remove product from cart", () => {
  it("should remove product from cart succesfully", () => {
    cy.visit("http://localhost:3000/product/66e98e9497e03192b3133e39");
    cy.contains("button", "Dodaj Do Koszyka").click();
    cy.visit("http://localhost:3000/cart");

    cy.url().should("include", "/cart");

    cy.contains("button", "Wyczyść koszyk").click();
    cy.url().should("include", "/cart");

    cy.contains("Twój koszyk jest pusty").should("exist");
  });
});
