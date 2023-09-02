describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should login with valid email and password", () => {
    cy.login();
    cy.contains("Movie Reviews").should("be.visible");
  });

  it("should not login with invalid email and password", () => {
    cy.loginWith(" ", " ");
    // TODO: Validate the error message also once it is implemented
    cy.contains("Login").should("be.visible");
  });
});
