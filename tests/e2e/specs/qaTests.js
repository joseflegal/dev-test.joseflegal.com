describe("Form Validation Tests", () => {
  beforeEach(() => {
    // Visit the page where the form is located
    cy.visit("http://localhost:9001/#/qa");
  });

  it("Shows a message when a required field is not entered", () => {
    // Submit the form without filling out any fields
    cy.get('[name="name"]').should("have.length", 1);
    cy.get('[name="email"]').should("have.length", 1);
    cy.get('[name="age"]').should("have.length", 1);
    cy.get('[name="phone"]').should("have.length", 1);

    cy.get("form").submit();
  });

  it("Submits the form successfully", () => {
    // Fill out the form inputs
    cy.get('[name="name"]').type("John Doe");
    cy.get('[name="email"]').type("john@example.com");
    cy.get('[name="age"]').type("30");
    cy.get('[name="phone"]').type("1234567890");

    // Submit the form
    cy.get("form").submit();

    // Wait for the form submission response
    cy.contains("Form submited:").should("be.visible");
    cy.contains("John Doe")
      .should("be.visible")
      .and("have.css", "font-weight", "bold");
    cy.contains("john@example.com").should("be.visible");
    cy.contains("30").should("be.visible");
    cy.contains("1234567890").should("be.visible");
    cy.contains("✅").should("be.visible");
  });

  it("Shows the default browser error message for wrong email format", () => {
    // Fill out the form with a wrong email format
    cy.get('[name="email"]').type("invalid");
    cy.get('[name="email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please include an '@' in the email address. 'invalid' is missing an '@'."
      );
    });
    // Submit the form
    cy.get("form").submit();
  });
});
