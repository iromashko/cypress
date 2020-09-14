/// <reference types='Cypress' />

describe('Update Request', () => {
  it('Update existing post via /posts api', () => {
    cy.request({
      method: 'PUT',
      url: 'http://localhost:3000/posts/2',
      body: {
        title: 'Who let the dogs out?',
        author: 'Tom Jones',
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
