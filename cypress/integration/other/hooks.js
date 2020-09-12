describe('Hooks', () => {
  before(() => {
    cy.log('Before hook');
  });

  after(() => {
    cy.log('After hook');
  });

  beforeEach(() => {
    cy.log('Before each hook');
  });

  afterEach(() => {
    cy.log('After each hook');
  });
  it('Log hooks', () => {
    cy.log('Log Hooks');
  });
  it('Log hooks', () => {
    cy.log('Log Hooks 2');
  });
});
