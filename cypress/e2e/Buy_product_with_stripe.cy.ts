describe("Buy product with stripe", () => {
  it("Logged usser should have access to buy item", () => {
    cy.visit(
      "https://asnet-komputery.vercel.app/product/66e98e9497e03192b3133e39"
    );

    cy.contains("button", "Dodaj Do Koszyka").click();

    cy.contains("Produkt dodany do koszyka").should("exist");

    cy.wait(3000);

    cy.contains("button", "Zobacz Koszyk").click();

    cy.wait(3000);

    cy.visit("https://asnet-komputery.vercel.app/login");

    cy.get("input#email").type("test12@gmail.com");

    cy.get("input#password").type("passwords1234");

    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("not.exist");

    cy.url().should("include", "/");

    cy.wait(3000);

    cy.visit("https://asnet-komputery.vercel.app/cart");
    cy.wait(3000);
    cy.contains("button", "Kup").click();
  });
});
