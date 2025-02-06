import "cypress-file-upload";

describe("Admin Crud operation", () => {
  it("Admin should add, edit, and delete product", () => {
    cy.visit("https://asnet-komputery.vercel.app/login");

    cy.get("input#email").type("a@a");
    cy.get("input#password").type("a");
    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("not.exist");
    cy.url().should("include", "/");

    cy.wait(3000);

    //---------------------------------------ADD/EDIT/DELETE--------------------------------------
    cy.visit("https://asnet-komputery.vercel.app/admin/add-products");
    cy.wait(3000);

    cy.get('input[id="name"]').type("AAA Test Product");
    cy.get('input[id="price"]').type("99.99");
    cy.get('input[id="brand"]').type("TestBrand");
    cy.get('textarea[id="description"]').type("This is a test product.");

    cy.get("div").contains("Wybierz kategorie").click();
    cy.get("div").contains("Peryferia").click();

    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });

    cy.get('input[type="file"]').attachFile("images/test-image.jpg");

    cy.contains("button", "Dodaj Produkt").click();
    cy.wait(5000);
  });

  it("Edit", () => {
    cy.visit("https://asnet-komputery.vercel.app/login");

    cy.get("input#email").type("a@a");

    cy.get("input#password").type("a");

    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("not.exist");

    cy.url().should("include", "/");

    cy.wait(3000);

    cy.visit("https://asnet-komputery.vercel.app/admin/manage-products");

    cy.wait(3000);
    cy.get('.MuiDataGrid-columnHeaderTitle:contains("Nazwa")').click();

    cy.contains(".MuiDataGrid-cell", "AAA Test Product")
      .parent()
      .find("button")
      .eq(2)
      .click();

    cy.wait(3000);
    cy.contains("button", "Zapisz").click();
    cy.wait(3000);
  });

  it("Delete", () => {
    cy.visit("https://asnet-komputery.vercel.app/login");

    cy.get("input#email").type("a@a");

    cy.get("input#password").type("a");

    cy.contains("button", "Zaloguj się").click();

    cy.contains("Zły e-mail lub hasło").should("not.exist");

    cy.url().should("include", "/");

    cy.wait(3000);

    cy.visit("https://asnet-komputery.vercel.app/admin/manage-products");
    cy.get('.MuiDataGrid-columnHeaderTitle:contains("Nazwa")').click();

    cy.wait(3000);
    cy.contains(".MuiDataGrid-cell", "AAA Test Product")
      .parent()
      .find("button")
      .eq(1)
      .click();
    cy.wait(3000);
  });
});
