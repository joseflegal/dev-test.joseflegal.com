// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Vue.js layout");
    cy.get(".vsm--header").contains("Josef coding challenge");
    cy.get(".vsm--title").contains("Vue.js layout");
    cy.get(".vsm--title").contains("Rules engine");
    cy.get(".vsm--title").contains("Design system");
  });
});
