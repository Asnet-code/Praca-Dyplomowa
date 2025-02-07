describe("Remove product from cart", () => {
  it("should remove product from cart succesfully", () => {
    cy.visit("http://localhost:3000/product/660d522d74556156e974629a");
    cy.contains("button", "Dodaj Do Koszyka").click();
    cy.visit("http://localhost:3000/cart");

    cy.url().should("include", "/cart");

    cy.contains("button", "Wyczyść koszyk").click();
    cy.url().should("include", "/cart");

    cy.contains("Twój koszyk jest pusty").should("exist");
  });
});
