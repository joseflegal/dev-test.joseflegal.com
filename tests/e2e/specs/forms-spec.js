describe("QA Page Form Submission", () => {
  beforeEach(() => {
    // Visit the QA page before each test
    cy.visit("http://localhost:9001/#/qa");
  });

  it("successfully submits the form", () => {
    // Fill out the form
    cy.get('input[name="name"]').type("John Doe");
    cy.get("input[name=email]").type("john.doe@example.com");
    cy.get("input[name=age]").type("30");
    cy.get("input[name=phone]").type("123-456-7890");

    // Submit the form
    cy.get("form.user-data").submit();

    // Check if the submission was successful
    cy.get(".container").should("contain", "Form submited");
  });
});
