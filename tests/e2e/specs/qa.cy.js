// https://docs.cypress.io/api/introduction/api.html

describe("QA page", () => {
  it("should display header", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.contains("h1", "QA");
  });

  it("should not submit when leaving name empty", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').should('be.visible');
    });

  it("should not submit when leaving email empty", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('input[name="name"]').type('John Doe');
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').should('be.visible');
  });

  it("should not submit when email entered incorrectly without @", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe');
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').should('be.visible');
  });

  it("should not submit when email entered incorrectly with no element following @", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('johndoe@');
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').should('be.visible');
  });

  it("should not submit when leaving age empty", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@doe.com');
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').should('be.visible');
  });

  it("should not submit when leaving phone empty", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@doe.com');
    cy.get('input[name="age"]').type('23');
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').should('be.visible');
  });

  it("should not submit when incorrect phone format", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@doe.com');
    cy.get('input[name="age"]').type('23');
    cy.get('input[name="phone"]').type('abc');
    cy.get('[type="submit"]').click();
    cy.get('[type="submit"]').should('be.visible');
  });

  it("should successfully submit form when all information are entered", () => {
    cy.visit("http://localhost:9001/entites#/qa");
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@doe.com');
    cy.get('input[name="age"]').type('23');
    cy.get('input[name="phone"]').type('0123456');
    cy.get('[type="submit"]').click();
    cy.contains('[data-cy="submit-confirmation"]', ' Form submited: ').should('be.visible');
  })
});
