// tests/e2e/specs/qa_page_spec.js

describe('QA Page', () => {
    it('loads successfully', () => {
      cy.visit('/#/qa'); // Cypress will prepend the baseUrl from cypress.json
      cy.contains('h1', 'QA'); // Check if the 'QA' heading is present
    });
  
    it('submits the form', () => {
      cy.visit('/#/qa');
  
      // Fill out and submit the form
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('input[name="age"]').type('30');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('form').submit();
  
      // Add assertions here to check for successful submission
      // Example: cy.contains('Form submitted');
    });
  });