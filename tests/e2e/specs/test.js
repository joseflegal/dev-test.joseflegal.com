// https://docs.cypress.io/api/introduction/api.html

describe("First Test", () => {
  it("Directs to the root page", () => {
    cy.visit("http://localhost:9001/#/qa");
    cy.contains("QA");
  });
});

describe("Test to submit the form", () => {
  it("Adds details to the form and submits the form", () => {
    
    cy.get(`input[name="name"]`).type("Jordan");
    cy.get(`input[name="email"]`).type("jordanmathew0794@gmail.com")
    cy.get(`input[name="age"]`).type("29")
    cy.get(`input[name="phone"]`).type("123456789")

    cy.get(".user-data").submit()

  });
});
