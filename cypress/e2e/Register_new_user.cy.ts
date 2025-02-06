describe("Registration Form", () => {
  it("handles registration failure with invalid data", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("#name").type("!");
    cy.get("#email").type("invalid_email");
    cy.get("#password").type("!");

    cy.get("button").contains("Zarejestruj się").click();

    cy.contains("Registration successful").should("not.exist");
    cy.contains("Coś poszło nie tak").should("exist");
  });
  it("successfully registers a new user", () => {
    cy.visit("http://localhost:3000/register");

    cy.get("#name").type("John Doeses");
    cy.get("#email").type("tesst12@gmail.com");
    cy.get("#password").type("password1234");

    cy.get("button").contains("Zarejestruj się").click();
    cy.contains("Zalogowano").should("exist");

    cy.url().should("not.eq", "http://localhost:3000");
  });
});
