describe("Category Navigation", () => {
  const categories = [
    { name: "Komputery", url: "Komputery" },
    { name: "Laptopy", url: "Laptopy" },
    { name: "Peryferia", url: "Peryferia" },
    { name: "Monitory", url: "Monitory" },
    { name: "Second hand", url: "Second%20hand" },
  ];

  categories.forEach((category) => {
    it(`should navigate to ${category.name} category`, () => {
      cy.visit(`http://localhost:3000/kategorie?category=${category.url}`);

      cy.url().should("include", `/kategorie?category=${category.url}`);

      cy.contains(category.name).should("exist");
    });
  });
});
