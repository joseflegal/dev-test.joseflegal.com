describe('Form Submission', () => {
    it('Submits the form on the QA page', () => {
      // Visit the QA page or the page with your form
      cy.visit('/#/qa')
  
      // Type into form fields
      cy.get('#name').type('testuser')
      cy.get('#email').type('testemail')
      cy.get('#age').type('testage')
      cy.get('#phone').type('testphone')
  
      // Submit the form
      cy.get('form').submit()
  
      // Optionally, assert that the form submission was successful
//      cy.url().should('include', '/success-page')
    })
  })
  