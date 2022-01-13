import stubData from '../../../src/assets/stubData';

describe('Squizards Spells functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display an error if there is a problem with the server', () => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes/', {
      statusCode: 500,
      ok: false,
      body: {}
    })

    cy.visit('localhost:3000/class/')
      .get('.char-class-box')
      .should('contain', 'Squizard is sorry!  Something has gone wrong, please try again.')
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
      .get('.spell-box:first')
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

      cy.fixture('clericSpells.json').as('clericSpells').then((clericSpells) => {
        cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes/cleric/spells', {
          statusCode: 200,
          ok: true,
          body: clericSpells
        })
      })

    cy.get('body')
      .get('div')
      .get('div')
      .get('.spell-box:first')
      .contains('Guidance')
  })

  it('should allow the user to see all spell details when each spell is clicked on', () => {
 
    cy.fixture('guidance.json').as('guidance').then((guidance) => {
      cy.intercept('GET', 'https://www.dnd5eapi.co/api/spells/guidance', {
        statusCode: 200,
        ok: true,
        body: guidance
      })
    })

    cy.visit('http://localhost:3000/spells/guidance')

    cy.get('body')
      .get('div')
      .get('div')
      .contains('Guidance')
  })

  it('should allow users to add and remove bookmarks on spells, and view bookmarked spells in My Spellbook', () => {
   

    cy.fixture('clericSpells.json').as('clericSpells').then((clericSpells) => {
      cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes/cleric/spells', {
        statusCode: 200,
        ok: true,
        body: clericSpells
      })
    })

      cy.visit('http://localhost:3000/cleric/spells')

      .get('.spell-container')
      .get('.spell-box')
      .get('.single-spell')
      .contains('Guidance')
      .get('.bookmark:first')
      .click()

      cy.visit('http://localhost:3000/my-spellbook')
      .get('.single-spell')
      .contains('Guidance')
      .get('.bookmark:first')
      .click()
  })
})
