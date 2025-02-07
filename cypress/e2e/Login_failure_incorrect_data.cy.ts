describe("Login failure with incorrect email and password", () => {
  it("should fail to log in with invalid credentials", () => {
    cy.visit("http://localhost:3000/login");

    cy.get("input#email").type("t@test");

    cy.get("input#password").type("test");

    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("exist");

    cy.url().should("include", "/login");
  });
});
