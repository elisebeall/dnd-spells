// import stubData from './src/assets/stubData.js';

describe('Squizards Spells functionality', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('should display a nav bar', () => {
    cy.get('header')
      .get('h1')
      .contains("Squizard's Spells")

    })
  
  it('should display two options to click on', () => {
    cy.get('main')
      .get('.home-nav')
      .contains('Browse Spells')

    cy.get('main')
      .get('.home-nav')
      .contains('My Spellbook')
  })

  it('should display the classes that spells can be filtered by', () => {
    cy.get('main')
      .get('.home-nav:first')
      .click()
      .url().should('include', 'class')
  })

  it('should allow users to sort spells by class', () => {
    cy.get('main')
      .get('.home-nav:first')
      .click()

    cy.get('body')
      .get('div')
      .get('div')
      .get('.char-class-card')
      .contains('Bard')
      .click()
    
    cy.get('body')
      .get('div')
      .get('div')
      .get('.spellBox:first')
      .contains('Dancing Lights')
  })

  it('should allow users to sort spells by a different class', () => {
    cy.get('main')
      .get('.home-nav:first')
      .click()

    cy.get('body')
      .get('div')
      .get('div')
      .get('.char-class-card')
      .contains('Cleric')
      .click()

    cy.get('body')
      .get('div')
      .get('div')
      .get('.spellBox:first')
      .contains('Guidance')
  })

  it('should allow the user to see all spell details when each spell is clicked on', () => {
    cy.get('main')
    .get('.home-nav:first')
    .click()

  cy.get('body')
    .get('div')
    .get('div')
    .get('.char-class-card')
    .contains('Cleric')
    .click()

  cy.get('body')
    .get('div')
    .get('div')
    .get('.spellBox:first')
    .contains('Guidance')
    .click()

  cy.get('body')
    .get('div')
    .get('div')
  })
})
