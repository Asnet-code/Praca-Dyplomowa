describe("Login Form", () => {
  it("should log in successfully with valid credentials", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("input#email").type("a@ta");

    cy.get("input#password").type("a");

    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("not.exist");

    cy.url().should("include", "/");
  });
});
