import stubData from '../../../src/assets/stubData';

describe('Squizards Spells functionality', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  /*
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/', {
      statusCode: 200,
      ok: true,
      body: { stubData }
    })
  */

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
    cy.fixture('classes.json').as('classes').then((classes) => {
      cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes/', {
        statusCode: 200,
        ok: true,
        body: classes
      })
    })

    cy.get('main')
      .get('.home-nav:first')
      .click()
      .url().should('include', 'class')
    cy.get('.char-class-box')
      .get('h3').should('contain', 'Barbarian')
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

      cy.fixture('bardSpells.json').as('bardSpells').then((bardSpells) => {
        cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes/bard/spells', {
          statusCode: 200,
          ok: true,
          body: bardSpells
        })
      })

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
