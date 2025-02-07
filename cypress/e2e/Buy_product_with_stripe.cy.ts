describe("Buy product with stripe", () => {
  it("Logged usser should have access to buy item", () => {
    cy.visit(
      "https://asnet-komputery.vercel.app/product/660d522d74556156e974629a"
    );

    cy.contains("button", "Dodaj Do Koszyka").click();

    cy.contains("Produkt dodany do koszyka").should("exist");

    cy.wait(3000);

    cy.contains("button", "Zobacz Koszyk").click();

    cy.wait(3000);

    cy.visit("https://asnet-komputery.vercel.app/login");

    cy.get("input#email").type("a@a");

    cy.get("input#password").type("a");

    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("not.exist");

    cy.url().should("include", "/");

    cy.wait(3000);

    cy.visit("https://asnet-komputery.vercel.app/cart");
    cy.wait(3000);
    cy.contains("button", "Kup").click();
  });
});
