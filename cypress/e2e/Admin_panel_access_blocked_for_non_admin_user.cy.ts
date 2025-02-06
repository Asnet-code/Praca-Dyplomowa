describe("ABlocked access", () => {
  it("should block access for non admin users", () => {
    cy.visit("http://localhost:3000/admin");
    cy.contains("Nie jesteś adminem, brak dostępu!").should("exist");
  });
});
