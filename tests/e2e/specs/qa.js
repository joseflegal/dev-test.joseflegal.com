describe("QA Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9001/#/qa");
  });

  it("displays the QA page correctly", () => {
    cy.contains("h1", "QA");
    cy.contains("p", "This application was created with Vue Cli");
    cy.contains("h3", "API example");
    cy.contains("h3", "Form example");
  });

  it("submits the form successfully", () => {
    const userData = {
      name: "John Doe",
      email: "john.doe@example.com",
      age: "25",
      phone: "1234567890",
    };

    // Type user data into form
    cy.get('[name="name"]').type(userData.name);
    cy.get('[name="email"]').type(userData.email);
    cy.get('[name="age"]').type(userData.age);
    cy.get('[name="phone"]').type(userData.phone);

    // Submit form
    cy.get("form").submit();

    // Verify form submission message
    cy.contains("Form submitted");
    cy.contains(userData.name);
    cy.contains(userData.email);
    cy.contains(userData.age);
    cy.contains(userData.phone);
  });
});
