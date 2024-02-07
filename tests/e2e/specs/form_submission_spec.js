describe('Form Submission', () => {
    it('Submits the form on the QA page', () => {
      // Visit the QA page or the page with your form
      cy.visit('/#/qa')
  
      // Type into form fields
      cy.get('#inputname').type('testuser')
      cy.get('#inputemail').type('testemail@test')
      cy.get('#inputage').type('30')
      cy.get('#inputphone').type('222-222-2222')
  
      // Submit the form
      cy.get('form').submit()
  
      // Optionally, assert that the form submission was successful
//      cy.url().should('include', '/success-page')
    })
  })
  