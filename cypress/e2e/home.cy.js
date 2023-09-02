beforeEach(() => {
  cy.login();
});

describe("Home page", () => {
  it("should render the movie list with correct number of movies", () => {
    cy.get("table tbody tr").should("have.length", 10);
  });

  it("should render the movie list with correct movie details", () => {
    const headings = ["Name", "Release Date", "Genre", "Language", "Rating"];
    cy.get("table thead th span")
      .then((elements) => Cypress._.map(elements, "innerText"))
      .should("deep.equal", headings);
  });

  it("should sort the movie list on click on ratings header", () => {
    const ratings = [
      "8.8/10",
      "8.9/10",
      "8.9/10",
      "9/10",
      "9/10",
      "9/10",
      "9/10",
      "9/10",
      "9.2/10",
      "9.3/10",
    ];

    // Check in ascending order
    cy.get("table thead th span").contains("Rating").click();
    cy.get("table tbody tr td:nth-child(6)")
      .then((elements) => Cypress._.map(elements, "innerText"))
      .should("deep.equal", ratings);

    // Check in descending order
    cy.get("table thead th span").contains("Rating").click();
    cy.get("table tbody tr td:nth-child(6)")
      .then((elements) => Cypress._.map(elements, "innerText"))
      .should("deep.equal", ratings.slice().reverse());
  });

  it("should navigate to specific page on click on any page number", () => {
    cy.get(".Mui-selected").contains("1");
    cy.get(`[aria-label="Go to page 3"]`).click();
    cy.get(".Mui-selected").contains("3");
  });

  it("should navigate to next page on click on next button", () => {
    cy.get(".Mui-selected").contains("1");
    cy.get(`[aria-label="Go to next page"]`).click();
    cy.get(".Mui-selected").contains("2");
  });

  it("should navigate to previous page on click on previous button", () => {
    cy.get(".Mui-selected").contains("1");
    cy.get(`[aria-label="Go to next page"]`).click();
    cy.get(".Mui-selected").contains("2");

    // Navigate to previous page
    cy.get(`[aria-label="Go to previous page"]`).click();
    cy.get(".Mui-selected").contains("1");
  });

  it("should logout on click on logout button", () => {
    cy.get("button").contains("Logout").click();
    cy.contains("Login").should("be.visible");
  });
});
