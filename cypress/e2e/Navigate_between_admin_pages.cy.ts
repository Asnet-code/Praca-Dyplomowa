const login = () => {
  cy.visit("https://asnet-komputery.vercel.app/login");

  cy.get("input#email").type("a@a");
  cy.get("input#password").type("a");
  cy.contains("button", "Zaloguj się").click();

  cy.url().should("include", "/");
};

describe("Admin page navigation", () => {
  beforeEach(() => {
    login();
    cy.wait(2000);
  });

  it("should visit the admin page", () => {
    cy.visit("https://asnet-komputery.vercel.app/admin");
    cy.wait(2000);
  });

  it("should navigate to add computer page", () => {
    cy.visit("https://asnet-komputery.vercel.app/admin/add-computer");
    cy.url().should("include", "/admin/add-computer");
    cy.wait(2000);
  });

  it("should navigate to add laptop page", () => {
    cy.visit("https://asnet-komputery.vercel.app/admin/add-laptop");
    cy.url().should("include", "/admin/add-laptop");
    cy.wait(2000);
  });

  it("should navigate to add products page", () => {
    cy.visit("https://asnet-komputery.vercel.app/admin/add-products");
    cy.url().should("include", "/admin/add-products");
    cy.wait(2000);
  });

  it("should navigate to manage products page", () => {
    cy.visit("https://asnet-komputery.vercel.app/admin/manage-products");
    cy.url().should("include", "/admin/manage-products");
    cy.wait(2000);
  });

  it("should navigate to manage orders page", () => {
    cy.visit("https://asnet-komputery.vercel.app/admin/manage-orders");
    cy.url().should("include", "/admin/manage-orders");
    cy.wait(2000);
  });
});
