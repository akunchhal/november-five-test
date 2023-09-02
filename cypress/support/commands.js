Cypress.Commands.add("loginWith", (email, password) => {
  cy.visit("/login");
  cy.get("input[name='email']").clear().type(email);
  cy.get("input[name='password']").clear().type(password);
  cy.get("button[type='submit']").click();
});

Cypress.Commands.add("login", () => {
  return cy.fixture("login.json").then((user) => {
    return cy.loginWith(user.email, user.password);
  });
});
