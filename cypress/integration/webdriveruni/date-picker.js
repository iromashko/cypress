/// <reference types="Cypress" />
describe('Test Datepicker', () => {
  it('Select date', () => {
    cy.visit('http://webdriveruniversity.com/');
    cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true });
    cy.get('#datepicker').click();

    // let date = new Date();
    // date.setDate(date.getDate());
    // cy.log(date.getDate());

    // let date2 = new Date();
    // date2.setDate(date2.getDate() + 5);
    // cy.log(date2.getDate());
    let date = new Date();
    date.setDate(date.getDate() + 260);

    let futureYear = date.getFullYear();
    let futureMonth = date.toLocaleString('default', { month: 'long' });
    let futureDay = date.getDate();

    cy.log('Future year: ' + futureYear);
    cy.log('Future month: ' + futureMonth);
    cy.log('Future day: ' + futureDay);

    function selectMonthAndYear() {
      cy.get('.datepicker-dropdown')
        .find('.datepicker-switch')
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get('.next').first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get('.datepicker-dropdown')
            .find('.datepicker-switch')
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get('.next').first().click();
                selectMonthAndYear();
              }
            });
        });
    }

    function selectFutureDay() {
      cy.get('[class=day]').contains(futureDay).click();
    }

    selectMonthAndYear();
    selectFutureDay();
  });
});
