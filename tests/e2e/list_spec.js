/// <reference types="cypress" />

/* const testId = id => `[data-testid="${id}"]`;
const TODO_CREATE = testId('todo-create');
const TODO_NAME = testId('todo-name');
const TODO_ITEM = testId('todo-item'); */

const testId = (id) => `[data-testid="${id}"]`
const INPUT_FORM = testId('input-form')
const LIST_ITEM = testId('list-item')
const TITLE_LIST_ITEM = testId('title-list-item')
const DELETE_LIST_ITEM = testId('delete-list-item')
const UNDO_BUTTON = testId('undo-button')

const ITEM1 = 'Milk'
const ITEM2 = 'Butter'
const ITEM3 = 'Weed'

let add3Items = () => {
  cy.get(INPUT_FORM)
    .type(ITEM1)
    .type('{enter}')
    .type(ITEM2)
    .type('{enter}')
    .type(ITEM3)
    .type('{enter}')
}

describe('LIST MVC', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('New list item', () => {
    it('should create new list item', () => {
      cy.get(INPUT_FORM).type('Milk').type('{enter}')
      cy.get(TITLE_LIST_ITEM).should('contain', 'Milk')
    })
    it('should create new list item which is not checked initially', () => {
      cy.get(INPUT_FORM).type('Milk').type('{enter}')
      cy.get('.PrivateSwitchBase-input-4').should('not.contain', 'checked=""')
    })
    it('should create 3 new list items (verify number and last entry)', () => {
      add3Items()
      cy.get(LIST_ITEM).should('have.length', 3)
      cy.get(TITLE_LIST_ITEM).last().should('contain', ITEM3)
    })
    it('should create new todo which is unchecked', () => {
      cy.get(INPUT_FORM).type('Milk').type('{enter}')
      cy.get('.PrivateSwitchBase-input-4').should('not.have.attr', 'checked')
    })
  })

  describe('Toggle', () => {
    it('should check list item', () => {
      cy.get(INPUT_FORM).type('Milk{enter}')
      cy.get(LIST_ITEM).click()
      cy.get('.PrivateSwitchBase-input-4').should('have.attr', 'checked')
    })
    it('should create 3 new list items and toggle the third', () => {
      add3Items()
      cy.get(LIST_ITEM).last().click()
      cy.get('.PrivateSwitchBase-input-4')
        .first()
        .should('not.have.attr', 'checked')
      cy.get('.PrivateSwitchBase-input-4').last().should('have.attr', 'checked')
    })
  })

  describe('Delete', () => {
    it('should delete list item', () => {
      add3Items()
      cy.get(DELETE_LIST_ITEM).first().click()
      cy.get(LIST_ITEM).should('not.contain', ITEM1)
    })
    it('should delete checked list item', () => {
      add3Items()
      cy.get(LIST_ITEM).last().click()
      cy.get(DELETE_LIST_ITEM).last().click()
      cy.get(LIST_ITEM).should('not.contain', ITEM3)
    })
    it('should restore list item after deleting it', () => {
      add3Items()
      cy.get(DELETE_LIST_ITEM).first().click()
      cy.get(LIST_ITEM).should('have.length', 2)
      cy.get(UNDO_BUTTON).click()
      cy.get(LIST_ITEM).should('have.length', 3)
    })
    it('should restore checked list item after deleting it', () => {
      add3Items()
      cy.get(LIST_ITEM).last().click()
      cy.get(DELETE_LIST_ITEM).last().click()
      cy.get(LIST_ITEM).should('have.length', 2)
      cy.get(UNDO_BUTTON).click()
      cy.get(LIST_ITEM).should('have.length', 3)
    })
  })
})
