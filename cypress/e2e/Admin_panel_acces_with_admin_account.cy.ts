describe("Login form admin", () => {
  it("Admin should have access to admin page", () => {
    cy.visit("https://asnet-komputery.vercel.app/login");

    cy.get("input#email").type("a@a");

    cy.get("input#password").type("a");

    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("not.exist");

    cy.url().should("include", "/");

    cy.wait(3000);

    cy.visit("https://asnet-komputery.vercel.app/admin");
    cy.contains("STRONA ADMINA").should("exist");
  });
});
