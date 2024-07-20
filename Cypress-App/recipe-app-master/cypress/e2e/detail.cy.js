describe("recipe project detail", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1200);
  });
  it("details", () => {
    cy.login();
    cy.home();
    cy.get("[data-test='contentHeader']").should("be.visible");
    cy.get("[data-test='contentParag']").should("be.visible");
    cy.get("[data-test='contentCal']").should("be.visible");
    cy.get("[data-test='contentImage']").should("be.visible");
    cy.get('[data-test="Fattest"]').should("be.visible");
    // BURADAAKİ Fat kısmı dinamik olarak item.labelden geliyor. detail sayfasını inceler.
    cy.get("[data-test='Carbstest']").should("be.visible");
    // BURADAAKİ Fat kısmı dinamik olarak item.labelden geliyor. detail sayfasını inceler.
  });
});
