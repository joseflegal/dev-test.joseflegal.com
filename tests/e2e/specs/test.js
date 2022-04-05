const nameElement = `input[name="name"]`;
const emailElement = `input[name="email"]`;
const ageElement = `input[name="age"]`;
const phoneElement = `input[name="phone"]`;

const submitElement = `button[type="submit"]`;
const submitValue = "#app p:last-child";

describe("Load QA page", () => {
  before(() => {
    cy.visit("http://localhost:9001/#/qa");
  });

  it("Check all elements", () => {
    cy.get(nameElement).should("be.visible");
    cy.get(emailElement).should("be.visible");
    cy.get(ageElement).should("be.visible");
    cy.get(phoneElement).should("be.visible");
    cy.get(submitElement).should("be.visible");
  });

  it("Submit user inputs", () => {
    const name = "Tomi Yamaha";
    const email = "tomiyamaha2017@hotmail.com";
    const age = "33";
    const phone = "(+81)03-3764-0869";

    cy.get(nameElement).type(name);
    cy.get(emailElement).type(email);
    cy.get(ageElement).type(age);
    cy.get(phoneElement).type(phone);

    cy.get(submitElement).click();

    cy.get(submitValue).should("contain", name);
    cy.get(submitValue).should("contain", email);
    cy.get(submitValue).should("contain", age);
    cy.get(submitValue).should("contain", phone);
  });
});
