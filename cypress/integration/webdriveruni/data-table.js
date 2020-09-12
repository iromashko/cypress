/// <reference types="Cypress" />
describe('Handling data', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/');
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true });
  });
  it('Assert age and users', () => {
    let userDetails = [];
    let num = 0;
    cy.get('#thumbnail-1 td')
      .each(($el, idx, $list) => {
        userDetails[idx] = $el.text();
      })
      .then(() => {
        let i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            num += Number(userDetails[i]);
          }
          // cy.log(userDetails[i]);
        }
        cy.log('Total age: ' + num);
        expect(num).to.eq(322);
      });
  });
  it('Calculate age of user', () => {
    cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, idx, $list) => {
      const text = $el.text();
      if (text.includes('Woods')) {
        cy.get('#thumbnail-1 tr td:nth-child(2)')
          .eq(idx)
          .next()
          .then((age) => {
            const userAge = age.text();
            expect(userAge).to.equal('80');
          });
      }
    });
  });
});
