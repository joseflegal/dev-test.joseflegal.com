describe("Test QA Component", () => {

  it('visits the QA page', () => {
    cy.visit("http://localhost:9002/#/qa");
    
    cy.get('h1').contains('QA');
  });

  // happy path test
  it('when submitting a form with correct details - it displays the new record', () => {
    cy.visit("http://localhost:9002/#/qa");

    cy.get('[data-cy="name-input"]').type('Cody');

    cy.get('[data-cy="email-input"]').type('cody@gmail.com');

    cy.get('[data-cy="age-input"]').type('25');

    cy.get('[data-cy="phone-input"]').type('0411112222');

    cy.get('[data-cy="cy-button"]').click();

    cy.get('[data-cy="form-record"]').contains('Cody');
    cy.get('[data-cy="form-record"]').contains('cody@gmail.com');
    cy.get('[data-cy="form-record"]').contains('25');
    cy.get('[data-cy="form-record"]').contains('0411112222');
  });

  // unhappy path end to end test
  it('when submitting a form with with no name input - it does not submit the form', () => {
    cy.visit("http://localhost:9002/#/qa");

    cy.get('[data-cy="email-input"]').type('bob@gmail.com');

    cy.get('[data-cy="age-input"]').type('10');

    cy.get('[data-cy="phone-input"]').type('0422221111');

    cy.get('[data-cy="cy-button"]').click();

    // check form output and submit button
    cy.get('[data-cy="cy-button"]').should('exist');
    cy.get('[data-cy="form-record"]').should('not.exist');
  });
});
