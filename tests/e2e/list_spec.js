/// <reference types="cypress" />

const testId = (id) => `[data-testid="${id}"]`
const LIST_ITEM = testId('list-item')
const CHECKBOX_LIST_ITEM = testId('checkbox')
const TITLE_LIST_ITEM = testId('title-list-item')
const DELETE_LIST_ITEM = testId('delete-list-item')
const ADD_BUTTON = testId('add-button')
const UNDO_BUTTON = testId('undo-button')

const ITEM1 = 'Milk'
const ITEM2 = 'Butter'
const ITEM3 = 'Weed'

let add3Items = () => {
  cy.get(ADD_BUTTON).type(ITEM1).type(ITEM2).type(ITEM3)
}

describe('LIST MVC', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('New list item', () => {
    it('should create new list item', () => {
      cy.get(ADD_BUTTON).type('Milk')
      cy.get(TITLE_LIST_ITEM).should('have.value', 'Milk')
    })
    it('should create new list item which is not checked initially', () => {
      cy.get(ADD_BUTTON).type('Milk')
      cy.get('.PrivateSwitchBase-input-4').should('not.contain', 'checked=""')
    })
    it('should render new list item which is unchecked', () => {
      cy.get(ADD_BUTTON).type('Milk')
      cy.get('.PrivateSwitchBase-input-4').should('not.have.attr', 'checked')
    })
    it('should create 3 new list items (verify number and last entry)', () => {
      add3Items()
      cy.get(LIST_ITEM).should('have.length', 3)
      cy.get(TITLE_LIST_ITEM).last().should('have.value', ITEM3)
    })
  })

  describe('Toggle', () => {
    it('should check list item', () => {
      cy.get(ADD_BUTTON).type('Milk')
      cy.get(CHECKBOX_LIST_ITEM).click()
      cy.get('.PrivateSwitchBase-input-4').should('have.attr', 'checked')
    })
    it('should create 3 new list items and toggle the third', () => {
      add3Items()
      cy.get(CHECKBOX_LIST_ITEM).last().click()
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
      cy.get(LIST_ITEM).should('not.have.value', ITEM1)
    })
    it('should delete checked list item', () => {
      add3Items()
      cy.get(CHECKBOX_LIST_ITEM).last().click()
      cy.get(DELETE_LIST_ITEM).last().click()
      cy.get(LIST_ITEM).should('not.have.value', ITEM3)
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
      cy.get(CHECKBOX_LIST_ITEM).last().click()
      cy.get(DELETE_LIST_ITEM).last().click()
      cy.get(LIST_ITEM).should('have.length', 2)
      cy.get(UNDO_BUTTON).click()
      cy.get(LIST_ITEM).should('have.length', 3)
    })
  })
})
