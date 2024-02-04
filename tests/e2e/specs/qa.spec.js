describe("Test QA Component", () => {
  it('when submitting a form with correct details - it displays the new record', () => {
    cy.visit("http://localhost:9002/#/qa");

    cy.wait(2000);
    cy.get('[data-cy="name-input"]').type('Cody', { delay: 300 });

    cy.wait(2000);
    cy.get('[data-cy="email-input"]').type('cody@gmail.com', { delay: 300 });

    cy.wait(2000);
    cy.get('[data-cy="age-input"]').type('25', { delay: 300 });

    cy.wait(2000);
    cy.get('[data-cy="phone-input"]').type('0411112222', { delay: 300 });

    cy.wait(2000);
    cy.get('[data-cy="cy-button"]').click();

    cy.wait(2000);
    cy.get('[data-cy="form-record"]').contains('Cody');
    cy.get('[data-cy="form-record"]').contains('cody@gmail.com');
    cy.get('[data-cy="form-record"]').contains('25');
    cy.get('[data-cy="form-record"]').contains('0411112222');
  });
});
