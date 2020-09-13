class ContactUs_PO {
  contactFormSubmission(
    first_name,
    last_name,
    email,
    body,
    $selector,
    textToLocate
  ) {
    cy.get('[name="first_name"]').type(first_name);
    cy.get('[name="last_name"]').type(last_name);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(body);
    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate, { timeout: 50000 });
  }
}

export default ContactUs_PO;
