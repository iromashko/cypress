/// <reference types='Cypress' />

describe('Post Request', () => {
  let titleOfPosts = new Array();
  it('Create a new post via /posts api', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/posts',
      body: {
        title: 'Lorem Ipsum',
        author: 'Iromashko',
      },
    }).then((response) => {
      expect(response.status).to.eql(201);
    });
  });

  it('Validate title of latest post', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/posts',
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => {
        let body = JSON.parse(JSON.stringify(response.body));
        body.forEach(function (item) {
          titleOfPosts.push(item.title);
        });
      })
      .then(() => {
        let latestPost = titleOfPosts[titleOfPosts.length - 1];
        expect(latestPost).to.eq('Lorem Ipsum');
      });
  });
});
