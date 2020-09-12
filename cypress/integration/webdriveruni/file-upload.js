/// <reference types='Cypress' />

describe('File Upload', () => {
  it('Upload File', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#file-upload')
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.fixture('wallpaper.jpg', 'base64').then((fileContent) => {
      cy.get('#myFile').attachFile(
        {
          fileContent,
          fileName: 'wallpaper.jpg',
          mimeType: 'image/jpg',
        },
        {
          uploadType: 'input',
        }
      );
    });
    cy.get('#submit-button').click();
  });

  it('Upload no File', () => {
    cy.visit('https://www.webdriveruniversity.com/');
    cy.get('#file-upload')
      .invoke('removeAttr', 'target')
      .click({ force: true });

    cy.get('#submit-button').click();
  });
});
