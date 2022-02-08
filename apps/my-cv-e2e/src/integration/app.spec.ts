import {
  getAddTodoButton,
  getGreeting,
  getTodos,
  whatsNextButton,
  whatsNextButton,
} from '../support/app.po';

describe('my-cv', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome my-cv');
  });

  it.only('should display whats next button', () => {
    whatsNextButton().should((t) => expect(t.length).equal(1));
  });

  // it('should display todos', () => {
  //   getTodos().should((t) => expect(t.length).equal(2));
  //   getAddTodoButton().click();
  //   getTodos().should((t) => expect(t.length).equal(3));
  // });
});
