// https://docs.cypress.io/api/introduction/api.html

describe("QA test", () => {

  it("Visit the QA page", () => {
    cy.visit("#/qa");
    cy.contains("h1", "QA");
  })

  it("Fill in form and click submit" , () => {
    cy.visit("#/qa");
    cy.get('input[name="name"]').type("Test");
    cy.get('input[name="email"]').type("test@test.com");
    cy.get('input[name="age"]').type(33);
    cy.get('input[name="phone"]').type(84747342);
    cy.get('form').submit();
    cy.contains("p", "(test@test.com), age of 33, tel: 84747342 ✅")
  })
});
