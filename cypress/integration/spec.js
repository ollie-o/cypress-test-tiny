describe("page", () => {
  it("works", () => {
    cy.task("log", "This should only be logged in the terminal once!");
    cy.visit("https://google.com");
  });
});
