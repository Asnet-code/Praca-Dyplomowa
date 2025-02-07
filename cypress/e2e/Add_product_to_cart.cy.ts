describe("Add product to cart", () => {
  it("should add product to cart successfully", () => {
    cy.visit("http://localhost:3000/product/660d522d74556156e974629a");

    cy.url().should("include", "/product/660d522d74556156e974629a");

    cy.contains("button", "Dodaj Do Koszyka").click();

    cy.contains("Produkt dodany do koszyka").should("exist");

    cy.visit("http://localhost:3000/cart");
    cy.contains("KOMPUTER INTEL I5-4570").should("exist");
  });
});
