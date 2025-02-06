describe("Add product to cart", () => {
  it("should add product to cart successfully", () => {
    cy.visit("http://localhost:3000/product/66e98e9497e03192b3133e39");

    cy.url().should("include", "/product/66e98e9497e03192b3133e39");

    cy.contains("button", "Dodaj Do Koszyka").click();

    cy.contains("Produkt dodany do koszyka").should("exist");

    cy.visit("http://localhost:3000/cart");
    cy.contains("ZESTAW KOMPUTEROWY").should("exist");
  });
});
