import stubData from '../../../src/assets/stubData';

describe('Squizards Spells functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/', {
      statusCode: 200,
      ok: true,
      body: { stubData }
    })
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
    cy.visit('http://localhost:3000/spells/guidance')

    cy.get('body')
      .get('div')
      .get('div')
      .contains('Guidance')
  })

  it('should allow users to bookmark spells from the class page', () => {
    cy.visit('http://localhost:3000/sorcerer/spells')
      .get('.spellContainer')
      .get('.spellBox')
      .get('div')
      .get('.bookmark:first')
      .click()

    cy.visit('http://localhost:3000/sorcerer/spells')
      .get('div')
      .get('div')
      .get('.singleSpell')
      .contains('Acid Splash')
  })
})
