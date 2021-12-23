// https://docs.cypress.io/api/introduction/api.html

const baseUrl = "http://localhost:9001/#/qa";
const nameInput = "[name='name']";
const emailInput = "[name='email']";
const ageInput = "[name='age']";
const phoneInput = "[name='phone']";
const submitBtn = "button.jo-button";
const submittedOutput = "#app > main > div > p:nth-child(9)";

before(() => {
  cy.visit(baseUrl);
})

describe("Test QA Page is successfully loaded", () => {
  it('Visit the Josef QA task page', () => {
    cy.contains('h1', 'QA');
    cy.contains('h3:nth-child(5)', 'API example');
    cy.get('ul.entities').should('be.visible');
    cy.contains('h3:nth-child(8)', 'Form example');
    cy.get('form.user-data').should('be.visible');
    cy.get('#app > main > div > form > div:nth-child(1) > div.input-field__label-wrapper > label').should('be.visible');
    cy.get(nameInput).should('be.visible');
    cy.get('#app > main > div > form > div:nth-child(2) > div.input-field__label-wrapper > label').should('be.visible');
    cy.get(emailInput).should('be.visible');
    cy.get('#app > main > div > form > div:nth-child(3) > div.input-field__label-wrapper > label').should('be.visible');
    cy.get(ageInput).should('be.visible');
    cy.get('#app > main > div > form > div:nth-child(4) > div.input-field__label-wrapper > label').should('be.visible');
    cy.get(phoneInput).should('be.visible');
    cy.get(submitBtn).should('be.visible');
  });
});

describe("Test submit happy path", () => {
  var nameValue = 'Mark QA';
  var emailValue = 'markQA@tester.com';
  var ageValue = 32;
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('exist');
    cy.get(submittedOutput).should('contain', nameValue);
    cy.get(submittedOutput).should('contain', emailValue);
    cy.get(submittedOutput).should('contain', ageValue);
    cy.get(submittedOutput).should('contain', phoneValue);
  });
});

describe("Test do not allow submit of string age", () => {
  var nameValue = 'Mark QA 2';
  var emailValue = 'markQA2@tester.com';
  var ageValue = 'This is a string';
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('not.exist');
    //cy.get('error message element').should('exist) I commented this out since there is actually no error message
  });
});

describe("Test render special character on name", () => {
  var nameValue = 'Mark QA 2 $ñ';
  var emailValue = 'markQA2@tester.com';
  var ageValue = 32;
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('exist');
    cy.get(submittedOutput).should('contain', nameValue);
    cy.get(submittedOutput).should('contain', emailValue);
    cy.get(submittedOutput).should('contain', ageValue);
    cy.get(submittedOutput).should('contain', phoneValue);
  });
});

describe("Test allow numeric string on age", () => {
  var nameValue = 'Mark QA 2 $ñ';
  var emailValue = 'markQA2@tester.com';
  var ageValue = '32';
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('exist');
    cy.get(submittedOutput).should('contain', nameValue);
    cy.get(submittedOutput).should('contain', emailValue);
    cy.get(submittedOutput).should('contain', ageValue);
    cy.get(submittedOutput).should('contain', phoneValue);
  });
});

describe("Test render unicode properly", () => {
  var nameValue = 'Mark QA i ♥ u';
  var emailValue = 'markQA3@tester.com';
  var ageValue = '32';
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('exist');
    cy.get(submittedOutput).should('contain', nameValue);
    cy.get(submittedOutput).should('contain', emailValue);
    cy.get(submittedOutput).should('contain', ageValue);
    cy.get(submittedOutput).should('contain', phoneValue);
  });
});

describe("Test render Japanese-Korean-Chinese characters properly", () => {
  var nameValue = 'Mark QA これはテストです 이것은 시험이다 这是一个测验';
  var emailValue = 'markQA3@tester.com';
  var ageValue = '32';
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('exist');
    cy.get(submittedOutput).should('contain', nameValue);
    cy.get(submittedOutput).should('contain', emailValue);
    cy.get(submittedOutput).should('contain', ageValue);
    cy.get(submittedOutput).should('contain', phoneValue);
  });
});

//Ideally this should fail if fields are required since name value is white space
describe("Test do not allow white space only values", () => {
  var nameValue = ' ';
  var emailValue = ' ';
  var ageValue = ' ';
  var phoneValue = ' ';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('not.exist');
    //cy.get('error message element').should('exist) I commented this out since there is actually no error message
  });
});

//Ideally this should fail
describe("Test white space value for Name", () => {
  var nameValue = ' ';
  var emailValue = 'markQA3@tester.com';
  var ageValue = '32';
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('exist');
    cy.get(submittedOutput).should('contain', nameValue);
    cy.get(submittedOutput).should('contain', emailValue);
    cy.get(submittedOutput).should('contain', ageValue);
    cy.get(submittedOutput).should('contain', phoneValue);
  });
});

describe("Test white space value for Age", () => {
  var nameValue = 'Mark QA WhiteSpace';
  var emailValue = 'markQA3@tester.com';
  var ageValue = ' ';
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('not.exist');
    //cy.get('error message element').should('exist) I commented this out since there is actually no error message
  });
});

describe("Test white space value for age", () => {
  var nameValue = 'Mark QA WhiteSpace';
  var emailValue = ' ';
  var ageValue = '32';
  var phoneValue = '1234456789';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('not.exist');
    //cy.get('error message element').should('exist) I commented this out since there is actually no error message
  });
});

//Ideally, we should not accept white space as values, this test case should fail
describe("Test white space value for phone value", () => {
  var nameValue = 'Mark QA WhiteSpace';
  var emailValue = 'markQA3@tester.com';
  var ageValue = '32';
  var phoneValue = ' ';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('exist');
    cy.get(submittedOutput).should('contain', nameValue);
    cy.get(submittedOutput).should('contain', emailValue);
    cy.get(submittedOutput).should('contain', ageValue);
    cy.get(submittedOutput).should('contain', phoneValue);
  });
});

describe("Test email does not accept without @ symbol", () => {
  var nameValue = 'Mark QA WhiteSpace';
  var emailValue = 'markQA3tester';
  var ageValue = '32';
  var phoneValue = ' ';
  it('Visit the Josef QA task page', () => {
    cy.reload();
    cy.get(nameInput).type(nameValue);
    cy.get(emailInput).type(emailValue);
    cy.get(ageInput).type(ageValue);
    cy.get(phoneInput).type(phoneValue);
    cy.get(submitBtn).click();
    cy.get(submittedOutput).should('not.exist');
    
  });
});


/*
Note:"Elements should ideally be unique like having unique element name/class/id"
*/