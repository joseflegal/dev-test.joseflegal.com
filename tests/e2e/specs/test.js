// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("http://localhost:9001/");
    cy.contains("h1", "Vue.js layout");
  });
});

describe("QA Automated Testing", () => {
  it("Visits the app's QA page", () => {
    cy.visit("http://localhost:9001/#/qa");
    cy.contains("h3", "API example")
  });
})

describe("Form Submission Test", () => {
  it("Open QA page, fill out form and submit form", () => {

    cy.visit("http://localhost:9001/#/qa");

    cy.get('[name="name"]').type('Abdulrahman');
    cy.get('[name="email"]').type('abdulrahman@gmail.com');
    cy.get('[name="age"]').type('30');
    cy.get('[name="phone"]').type('451888999');

    cy.get(".user-data").submit();

    cy.contains("h2","Form Submitted Successfully!");

    cy.wait(10000); // to prolong video to show success status of last test

  })
})